local telescope = require("telescope")
telescope.setup {
   fzf = {
      fuzzy = true,
      override_generic_sorter = false,
      override_file_sorter = true
   }
}
telescope.load_extension('fzf')
local api = vim.api
api.nvim_set_keymap("n", "<C-p>", "<cmd>lua require('telescope.builtin').find_files()<CR>", {noremap = true})
api.nvim_set_keymap("n", "<leader>fg", "<cmd>lua require('telescope.builtin').live_grep()<CR>", {noremap = true})
api.nvim_set_keymap("n", "<leader>fb", "<cmd>lua require('telescope.builtin').buffers()<CR>", {noremap = true})
api.nvim_set_keymap("n", "<leader>fc", "<cmd>lua require('telescope.builtin').commands()<CR>", {noremap = true})
