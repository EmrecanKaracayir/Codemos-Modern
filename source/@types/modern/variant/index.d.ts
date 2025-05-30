export type Palette = {
  base: string;
  loc: string;
  hic: string;
  basic: {
    def: {
      brown: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      mint: string;
      blue: string;
      purple: string;
      pink: string;
    };
    alt: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      mint: string;
      blue: string;
      purple: string;
      pink: string;
    };
    loc: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      mint: string;
      blue: string;
      purple: string;
      pink: string;
    };
  };
};

export type MimicInfo = {
  backdropColor: string;
  lumSourceColor: string;
  lumSourceAlpha: number;
  colSourceColor: string;
  colSourceAlpha: number;
};

export type Styles = {
  basic: {
    def: {
      brown: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      red: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      orange: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      yellow: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      green: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      mint: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      blue: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      purple: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      pink: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
    };
    alt: {
      red: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      orange: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      yellow: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      green: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      mint: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      blue: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      purple: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      pink: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
    };
    loc: {
      red: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      orange: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      yellow: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      green: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      mint: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      blue: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      purple: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
      pink: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
        sen: string;
      };
    };
    neutral: {
      pri: string;
      sec: string;
      ter: string;
      qua: string;
      qui: string;
      sen: string;
      sep: string;
      oct: string;
    };
  };
  fill: {
    text: {
      active: string;
      pri: string;
      sec: string;
      disabled: string;
      ghost: string;
    };
    onColor: {
      pri: string;
    };
    control: {
      doubleHover: string;
      hover: string;
      rest: string;
      restSolid: string;
      pressed: string;
      prominent: string;
      subtle: string;
    };
    accent: {
      pri: string;
      sec: string;
      ter: string;
    };
    accentText: {
      pri: string;
      sec: string;
    };
    onAccent: {
      pri: string;
    };
    system: {
      fg: {
        red: string;
        orange: string;
        yellow: string;
        green: string;
        mint: string;
        blue: string;
      };
      bg: {
        red: string;
        orange: string;
        yellow: string;
        green: string;
        mint: string;
        blue: string;
      };
    };
    tab: {
      activeFocused: string;
      activeUnfocused: string;
      inactiveFocused: string;
      inactiveUnfocused: string;
    };
    terminal: {
      fg: string;
      hic: string;
      hiq: string;
      loq: string;
      loc: string;
      stickyScrollHover: string;
    };
  };
  stroke: {
    control: {
      default: string;
      alt: string;
      elevation: string;
    };
    divider: {
      default: string;
    };
    surface: {
      flyout: string;
    };
    focus: {
      default: string;
    };
  };
  bg: {
    solid: {
      base: string;
      surface: string;
      layer: string;
      flyout: string;
    };
  };
  effect: {
    smoke: {
      default: string;
    };
    shadow: {
      default: string;
    };
  };
};
