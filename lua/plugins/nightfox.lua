local nightfox = require("nightfox")
nightfox.setup {
   fox = "duskfox", -- Which fox style should be applied
   transparent = false, -- Disable setting the background color
   terminal_colors = true, -- Configure the colors used when opening :terminal
   styles = {
      comments = "italic", -- Style that is applied to comments: see `highlight-args` for options
      functions = "italic", -- Style that is applied to functions: see `highlight-args` for options
      keywords = "italic,bold", -- Style that is applied to keywords: see `highlight-args` for options
      strings = "NONE", -- Style that is applied to strings: see `highlight-args` for options
      variables = "NONE", -- Style that is applied to variables: see `highlight-args` for options
   },
   inverse = {
      match_paren = false, -- Enable/Disable inverse highlighting for match parens
      visual = false, -- Enable/Disable inverse highlighting for visual selection
      search = false, -- Enable/Disable inverse highlights for search highlights
   },
   colors = { bg = "#191f2b" }, -- Override default colors
   hlgroups = {}, -- Override highlight groups
}

-- nightfox.load()
