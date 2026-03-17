# GREETING
set fish_greeting ""

# PATHS
fish_add_path ~/.local/bin
fish_add_path /opt/homebrew/sbin

# NVM
begin
    if test -e ".nvmrc"
        nvm install
    end
    if test -e "$PWD/node_modules/.bin"
        set --global __node_binpath "$PWD/node_modules/.bin"
        set --append PATH $__node_binpath
        print 0 INFORMATION "Added $__node_binpath to PATH."
    else
        set --query __node_binpath
        and set --local index (contains --index -- $__node_binpath $PATH)
        and set --export PATH[$index]
        and set --export __node_binpath
    end
end

# INTERACTIVE
if status is-interactive
    starship init fish | source
    set fzf_preview_dir_cmd eza --all --color=always
end
