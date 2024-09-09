fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'BlackCAT' -- Discord: cwblackcat
description 'Loading Screen (cyberpunk-theme)'
version '1.0.0'

files {
  'assets/**',
  'html/*'
}

loadscreen {
  'html/index.html'
  'config.json'
}

loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

client_script 'client/client.lua'
