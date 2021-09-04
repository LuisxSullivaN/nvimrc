local cmp = require('cmp')
local luasnip = require('luasnip')
local fn = vim.fn
local api = vim.api


local function format_completion(entry, vim_item)
   local emojis = {
      Class = "📚",
      Color = "🎨",
      Constant = "🔐",
      Constructor = "🛠️ ",
      Enum = "⛓ ",
      EnumMember = "🔗",
      Field = "⭐",
      File = "📄",
      Folder = "📂",
      Function = "⚙️ ",
      Interface = "🔒",
      Keyword = "🔑",
      Method = "🔩",
      Module = "🧰",
      Property = "💎",
      Snippet = "⚡️",
      Struct = "🧱",
      Text = "✏️ ",
      Unit = "🪙",
      Value = "🎲",
      Variable = "📦",
   }
   local formatted_sources = {
      nvim_lsp = '[LSP]',
      buffer = '[Buffer]',
      luasnip = '[LuaSnip]',
      cmp_tabnine = '[TabNine]',
      nvim_lua = '[Lua]',
      calc = '[Calc]',
      path = '[Path]'
   }
   local kind, source = vim_item.kind, entry.source.name
   vim_item.kind = string.format('%s %s', emojis[kind], kind)
   vim_item.menu = formatted_sources[source]
   return vim_item

end

local function expand_snippet(args)
   luasnip.lsp_expand(args.body)
end
local function tab_completion(fallback)
   if fn.pumvisible() == 1 then
      fn.feedkeys(api.nvim_replace_termcodes('<C-n>', true, true, true), 'n')
   elseif luasnip.expand_or_jumpable() then
      fn.feedkeys(api.nvim_replace_termcodes('<Plug>luasnip-expand-or-jump', true, true, true), '')
   else
      fallback()
   end
end

local function shift_tab_completion(fallback)
   if fn.pumvisible() == 1 then
      fn.feedkeys(api.nvim_replace_termcodes('<C-p>', true, true, true), 'n')
   elseif luasnip.jumpable(-1) then
      fn.feedkeys(api.nvim_replace_termcodes('<Plug>luasnip-jump-prev', true, true, true), '')
   else
      fallback()
   end
end

local function get_trigger_characters(trigger_characters)
   local filter_characters =  function(char)
      return char ~= ' ' and char ~= '\t'
   end
   return vim.tbl_filter(filter_characters, trigger_characters)
end

cmp.setup {
   snippet = {
      expand = expand_snippet,
   },
   completion = {
      get_trigger_characters = get_trigger_characters,
   },
   mapping = {
      ['<C-p>'] = cmp.mapping.select_prev_item(),
      ['<C-n>'] = cmp.mapping.select_next_item(),
      ['<C-d>'] = cmp.mapping.scroll_docs(-4),
      ['<C-f>'] = cmp.mapping.scroll_docs(4),
      ['<C-Space>'] = cmp.mapping.complete(),
      ['<C-e>'] = cmp.mapping.close(),
      ['<CR>'] = cmp.mapping.confirm {
         behavior = cmp.ConfirmBehavior.Insert,
         select = true,
      },
      ['<Tab>'] = cmp.mapping(tab_completion, { 'i', 's' }),
      ['<S-Tab>'] = cmp.mapping(shift_tab_completion, { 'i', 's' }),
   },
   documentation = {
      border = 'single'
   },
   formatting = {
      format = format_completion
   },
   sources = {
      { name = 'luasnip' },
      { name = 'nvim_lsp' },
      { name = 'nvim_lua' },
      { name = 'buffer' },
      { name = 'path' },
      { name = 'cmp_tabnine' },
      { name = 'calc' },
      { name = 'emoji' },
      { name = 'look' },
      { name = 'tmux' }
   }
}
