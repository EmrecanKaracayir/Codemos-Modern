function print
    # Print tabs
    if test $argv[1] -gt 0
        for i in (seq 0 (math $argv[1] - 1))
            echo -n "    "
        end
    end

    # Print based on type
    switch $argv[2]
        case DEFAULT
            set_color normal
            echo "[=] $argv[3]"
        case DIMMED
            set_color brblack
            echo "[-] $argv[3]"
        case TITLE
            set --local TEXT "| $(string upper $argv[3]) |"
            set --local DIVIDER "*$(string repeat --count (math (string length $TEXT) - 2) -)*"
            echo ""
            set_color --bold brwhite
            echo $DIVIDER
            echo $TEXT
            echo $DIVIDER
        case SUBTITLE
            set --local TEXT (string upper $argv[3])
            set --local DIVIDER (string repeat --count (string length $TEXT) -)
            echo ""
            set_color --bold brwhite
            echo $TEXT
            echo $DIVIDER
        case CHEVRON
            set_color magenta
            echo -n "[>] "
        case PROMPT
            set_color yellow
            echo -n "[<] "
            set_color bryellow
            echo $argv[3]
        case SYSTEM
            set_color magenta
            echo -n "[>] "
            set_color brmagenta
            echo $argv[3]
            set_color normal
        case FAILURE
            set_color red
            echo "[X] $argv[3]"
        case WARNING
            set_color yellow
            echo "[!] $argv[3]"
        case INFORMATION
            set_color blue
            echo "[i] $argv[3]"
        case LOADING
            set_color cyan
            echo "[~] $argv[3]"
        case SUCCESS
            set_color green
            echo "[+] $argv[3]"
    end

    # Reset the color
    set_color normal
end
