function switch_theme
    set --local CONFIG_PATH {$HOME}/.config
    set --local THEME_PATH {$CONFIG_PATH}/fish/themes
    set --local STARSHIP_PATH {$CONFIG_PATH}/starship
    if not test -e {$THEME_PATH}/.light
        source {$THEME_PATH}/codemos-modern-light.fish
        cp -f {$STARSHIP_PATH}/codemos-modern-light.toml {$CONFIG_PATH}/starship.toml
        touch {$THEME_PATH}/.light
        print 0 INFORMATION "Switched to light mode."
    else
        source {$THEME_PATH}/codemos-modern-dark.fish
        cp -f {$STARSHIP_PATH}/codemos-modern-dark.toml {$CONFIG_PATH}/starship.toml
        rm {$THEME_PATH}/.light
        print 0 INFORMATION "Switched to dark mode."
    end

    # Reload Starship
    starship init fish | source
end
