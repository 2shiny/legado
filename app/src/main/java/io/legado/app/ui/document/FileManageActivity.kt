package io.legado.app.ui.document

import android.annotation.SuppressLint
import android.os.Bundle
import android.view.ViewGroup
import androidx.activity.viewModels
import androidx.appcompat.widget.SearchView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import io.legado.app.R
import io.legado.app.base.VMBaseActivity
import io.legado.app.base.adapter.ItemViewHolder
import io.legado.app.base.adapter.RecyclerAdapter
import io.legado.app.databinding.ActivityFileManageBinding
import io.legado.app.databinding.ItemFileBinding
import io.legado.app.databinding.ItemPathPickerBinding
import io.legado.app.lib.theme.primaryTextColor
import io.legado.app.ui.document.utils.FilePickerIcon
import io.legado.app.ui.widget.recycler.VerticalDivider
import io.legado.app.utils.ConvertUtils
import io.legado.app.utils.applyTint
import io.legado.app.utils.viewbindingdelegate.viewBinding
import java.io.File

class FileManageActivity : VMBaseActivity<ActivityFileManageBinding, FileManageViewModel>() {

    override val binding by viewBinding(ActivityFileManageBinding::inflate)
    override val viewModel by viewModels<FileManageViewModel>()
    private val searchView: SearchView by lazy {
        binding.titleBar.findViewById(R.id.search_view)
    }
    private val pathAdapter by lazy {
        PathAdapter()
    }
    private val fileAdapter by lazy {
        FileAdapter()
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        initView()
        initSearchView()
        viewModel.upFiles(viewModel.rootDoc)
    }

    private fun initView() {
        binding.rvPath.layoutManager = LinearLayoutManager(this, RecyclerView.HORIZONTAL, false)
        binding.rvPath.adapter = pathAdapter
        binding.recyclerView.layoutManager = LinearLayoutManager(this)
        binding.recyclerView.addItemDecoration(VerticalDivider(this))
        binding.recyclerView.adapter = fileAdapter
    }

    private fun initSearchView() {
        searchView.applyTint(primaryTextColor)
        searchView.queryHint = getString(R.string.screen) + " • " + getString(R.string.file_manage)
        searchView.onActionViewExpanded()
        searchView.isSubmitButtonEnabled = true
        searchView.clearFocus()
        searchView.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String?): Boolean {
                return false
            }

            override fun onQueryTextChange(newText: String?): Boolean {

                return false
            }
        })
    }

    override fun observeLiveBus() {
        viewModel.filesLiveData.observe(this) {
            fileAdapter.setItems(it)
        }
    }

    @SuppressLint("SetTextI18n")
    inner class PathAdapter :
        RecyclerAdapter<File, ItemPathPickerBinding>(this@FileManageActivity) {

        private val arrowIcon = ConvertUtils.toDrawable(FilePickerIcon.getArrow())

        init {
            addHeaderView {
                ItemPathPickerBinding.inflate(inflater, it, false).apply {
                    textView.text = "root"
                    imageView.setImageDrawable(arrowIcon)
                    root.setOnClickListener {
                        viewModel.subDocs.clear()
                        setItems(viewModel.subDocs)
                        viewModel.upFiles(viewModel.rootDoc)
                    }
                }
            }
        }

        override fun getViewBinding(parent: ViewGroup): ItemPathPickerBinding {
            return ItemPathPickerBinding.inflate(inflater, parent, false).apply {
                imageView.setImageDrawable(arrowIcon)
            }
        }

        override fun registerListener(holder: ItemViewHolder, binding: ItemPathPickerBinding) {
            binding.root.setOnClickListener {
                viewModel.subDocs = viewModel.subDocs.subList(0, holder.layoutPosition)
                setItems(viewModel.subDocs)
                viewModel.upFiles(viewModel.subDocs.lastOrNull())
            }
        }

        override fun convert(
            holder: ItemViewHolder,
            binding: ItemPathPickerBinding,
            item: File,
            payloads: MutableList<Any>
        ) {
            binding.textView.text = item.name
        }

    }

    inner class FileAdapter : RecyclerAdapter<File, ItemFileBinding>(this@FileManageActivity) {
        private val upIcon = ConvertUtils.toDrawable(FilePickerIcon.getUpDir())!!
        private val folderIcon = ConvertUtils.toDrawable(FilePickerIcon.getFolder())!!
        private val fileIcon = ConvertUtils.toDrawable(FilePickerIcon.getFile())!!
        private val dirParent = ".."

        override fun getViewBinding(parent: ViewGroup): ItemFileBinding {
            return ItemFileBinding.inflate(inflater, parent, false)
        }

        override fun registerListener(holder: ItemViewHolder, binding: ItemFileBinding) {
            binding.root.setOnClickListener {
                val item = getItemByLayoutPosition(holder.layoutPosition)
                item?.let {
                    if (item == (viewModel.subDocs.lastOrNull() ?: viewModel.rootDoc)) {
                        viewModel.subDocs.removeLastOrNull()
                        pathAdapter.setItems(viewModel.subDocs)
                        viewModel.upFiles(viewModel.subDocs.lastOrNull() ?: viewModel.rootDoc)
                    } else if (item.isDirectory) {
                        viewModel.subDocs.add(item)
                        pathAdapter.setItems(viewModel.subDocs)
                        viewModel.upFiles(item)
                    }
                }
            }
        }

        override fun convert(
            holder: ItemViewHolder,
            binding: ItemFileBinding,
            item: File,
            payloads: MutableList<Any>
        ) {
            if (item == (viewModel.subDocs.lastOrNull() ?: viewModel.rootDoc)) {
                binding.imageView.setImageDrawable(upIcon)
                binding.textView.text = dirParent
            } else if (item.isDirectory) {
                binding.imageView.setImageDrawable(folderIcon)
                binding.textView.text = item.name
            } else {
                binding.imageView.setImageDrawable(fileIcon)
                binding.textView.text = item.name
            }
        }


    }

}