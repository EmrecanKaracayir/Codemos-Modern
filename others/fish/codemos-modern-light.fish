# COLORS
set --export LC A5A5A5
set --export LQ 797979
set --export HQ 444444
set --export HC 181818

set --export DEF_BROWN 784F3F
set --export DEF_RED B70004
set --export DEF_ORANGE 9F5500
set --export DEF_YELLOW 7D7000
set --export DEF_GREEN 006904
set --export DEF_MINT 006560
set --export DEF_BLUE 0052C6
set --export DEF_PURPLE 7700EE
set --export DEF_PINK AC0074

set --export ALT_RED C35354
set --export ALT_ORANGE 8D7252
set --export ALT_YELLOW 7D7852
set --export ALT_GREEN 528256
set --export ALT_MINT 567E7C
set --export ALT_BLUE 5B79A2
set --export ALT_PURPLE 8E64B9
set --export ALT_PINK AF5A92

set --export LC_BROWN C0A59A
set --export LC_MINT 90B0AF

# THEME
set --global fish_color_normal $HC
set --global fish_color_command $DEF_YELLOW
set --global fish_color_keyword $DEF_PINK
set --global fish_color_quote $DEF_BROWN
set --global fish_color_redirection $DEF_BLUE
set --global fish_color_end $ALT_PINK
set --global fish_color_error $DEF_RED
set --global fish_color_param $DEF_ORANGE
set --global fish_color_valid_path $ALT_BLUE --underline
set --global fish_color_option $ALT_YELLOW
set --global fish_color_comment $DEF_GREEN
set --global fish_color_selection $HC --bold --background=$LC
set --global fish_color_operator $ALT_ORANGE
set --global fish_color_escape $DEF_RED
set --global fish_color_autosuggestion $LQ
set --global fish_color_cwd $ALT_BLUE
set --global fish_color_cwd_root $ALT_BLUE --bold
set --global fish_color_user $ALT_PURPLE
set --global fish_color_host $DEF_PURPLE
set --global fish_color_host_remote $DEF_MINT
set --global fish_color_status $DEF_RED
set --global fish_color_cancel $ALT_RED
set --global fish_color_match --background=$LC_BROWN
set --global fish_color_search_match --background=$LC_MINT
set --global fish_color_history_current $ALT_BLUE --bold

set --global fish_pager_color_progress $DEF_BLUE
set --global fish_pager_color_background
set --global fish_pager_color_prefix $DEF_MINT --bold
set --global fish_pager_color_completion $ALT_MINT
set --global fish_pager_color_description $ALT_GREEN

set --global fish_pager_color_selected_background --background=$LC
set --global fish_pager_color_selected_prefix $DEF_MINT --bold
set --global fish_pager_color_selected_completion $ALT_MINT
set --global fish_pager_color_selected_description $ALT_GREEN

set --global fish_pager_color_secondary_background
set --global fish_pager_color_secondary_prefix $DEF_MINT --bold
set --global fish_pager_color_secondary_completion $ALT_MINT
set --global fish_pager_color_secondary_description $ALT_GREEN
