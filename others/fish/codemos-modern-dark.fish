# COLORS
set --export LC 494949
set --export LQ 6E6E6E
set --export HQ 979797
set --export HC CDCDCD

set --export DEF_BROWN CB8569
set --export DEF_RED EF6363
set --export DEF_ORANGE D28342
set --export DEF_YELLOW BFAf40
set --export DEF_GREEN 45AA41
set --export DEF_MINT 46A598
set --export DEF_BLUE 4B9ECD
set --export DEF_PURPLE 9B87EA
set --export DEF_PINK ED63BA

set --export ALT_RED D19797
set --export ALT_ORANGE C59E7F
set --export ALT_YELLOW ADA77F
set --export ALT_GREEN 80B27F
set --export ALT_MINT 83AEA8
set --export ALT_BLUE 87ABC0
set --export ALT_PURPLE A9A0CB
set --export ALT_PINK CD95B8

set --export LC_BROWN 5D443A
set --export LC_MINT 344F4B

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
