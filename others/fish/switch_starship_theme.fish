function switch_starship_theme
    set --local CONFIG_PATH {$HOME}/.config
    set --local STARSHIP_PATH {$CONFIG_PATH}/starship

    if not test -e {$STARSHIP_PATH}/.light
        cp -f {$STARSHIP_PATH}/codemos-modern-light.toml {$CONFIG_PATH}/starship.toml
        touch {$STARSHIP_PATH}/.light
        print 0 INFORMATION "Switched to light mode."
    else
        cp -f {$STARSHIP_PATH}/codemos-modern-dark.toml {$CONFIG_PATH}/starship.toml
        rm {$STARSHIP_PATH}/.light
        print 0 INFORMATION "Switched to dark mode."
    end

    # Reload Starship
    starship init fish | source
end
