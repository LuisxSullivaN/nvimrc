local g = vim.g
g.nvim_tree_indent_markers = 1
g.nvim_tree_git_hl = 1
g.nvim_tree_follow = 1
g.nvim_tree_add_trailing = 1
g.nvim_tree_lsp_diagnostics = 1
g.nvim_tree_highlight_opened_files = 1
g.nvim_tree_update_cwd = 1
g.nvim_tree_respect_buf_cwd = 1
g.nvim_tree_special_files = { }
vim.api.nvim_set_keymap("n", "<leader>n", "<cmd>NvimTreeToggle<CR>", {noremap = true})
