"use strict";
n.r(t), n.d(t, {
  BACKGROUND_GRADIENT_PRESETS: function() {
    return E
  },
  BACKGROUND_GRADIENT_PRESETS_MAP: function() {
    return I
  },
  CLIENT_THEME_DC_MAP: function() {
    return T
  }
}), n("47120");
var i, r, s = n("392711"),
  a = n("704215"),
  o = n("524437"),
  l = n("231338"),
  u = n("689938");
let d = [{
    id: o.BackgroundGradientPresetId.MINT_APPLE,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_MINT_APPLE_1,
      stop: 6.15
    }, {
      token: l.Color.BG_GRADIENT_MINT_APPLE_2,
      stop: 48.7
    }, {
      token: l.Color.BG_GRADIENT_MINT_APPLE_3,
      stop: 93.07
    }],
    angle: 180,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_MINT_APPLE,
    midpointPercentage: 27
  }, {
    id: o.BackgroundGradientPresetId.CITRUS_SHERBERT,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_CITRUS_SHERBERT_1,
      stop: 31.1
    }, {
      token: l.Color.BG_GRADIENT_CITRUS_SHERBERT_2,
      stop: 67.09
    }],
    angle: 180,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_CITRUS_SHERBERT,
    midpointPercentage: 27
  }, {
    id: o.BackgroundGradientPresetId.RETRO_RAINCLOUD,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_RETRO_RAINCLOUD_1,
      stop: 5.64
    }, {
      token: l.Color.BG_GRADIENT_RETRO_RAINCLOUD_2,
      stop: 26.38
    }, {
      token: l.Color.BG_GRADIENT_RETRO_RAINCLOUD_2,
      stop: 49.92
    }, {
      token: l.Color.BG_GRADIENT_RETRO_RAINCLOUD_1,
      stop: 73.12
    }],
    angle: 148.71,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_RETRO_RAINCLOUD,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.HANAMI,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_HANAMI_1,
      stop: 3.56
    }, {
      token: l.Color.BG_GRADIENT_HANAMI_2,
      stop: 35.49
    }, {
      token: l.Color.BG_GRADIENT_HANAMI_3,
      stop: 68.78
    }],
    angle: 38.08,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_HANAMI,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.SUNRISE,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_SUNRISE_1,
      stop: 8.62
    }, {
      token: l.Color.BG_GRADIENT_SUNRISE_2,
      stop: 48.07
    }, {
      token: l.Color.BG_GRADIENT_SUNRISE_3,
      stop: 76.04
    }],
    angle: 154.19,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_SUNRISE,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.COTTON_CANDY,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_COTTON_CANDY_1,
      stop: 8.5
    }, {
      token: l.Color.BG_GRADIENT_COTTON_CANDY_2,
      stop: 94.28
    }],
    angle: 180.14,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_COTTON_CANDY,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.LOFI_VIBES,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_LOFI_VIBES_1,
      stop: 7.08
    }, {
      token: l.Color.BG_GRADIENT_LOFI_VIBES_2,
      stop: 34.94
    }, {
      token: l.Color.BG_GRADIENT_LOFI_VIBES_3,
      stop: 65.12
    }, {
      token: l.Color.BG_GRADIENT_LOFI_VIBES_4,
      stop: 96.23
    }],
    angle: 179.52,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_LOFI_VIBES,
    midpointPercentage: 27
  }, {
    id: o.BackgroundGradientPresetId.DESERT_KHAKI,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_DESERT_KHAKI_1,
      stop: 12.92
    }, {
      token: l.Color.BG_GRADIENT_DESERT_KHAKI_2,
      stop: 32.92
    }, {
      token: l.Color.BG_GRADIENT_DESERT_KHAKI_3,
      stop: 52.11
    }],
    angle: 38.99,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_DESERT_KHAKI,
    midpointPercentage: 50
  }],
  _ = [{
    id: o.BackgroundGradientPresetId.SUNSET,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_SUNSET_1,
      stop: 27.57
    }, {
      token: l.Color.BG_GRADIENT_SUNSET_2,
      stop: 71.25
    }],
    angle: 141.68,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_SUNSET,
    midpointPercentage: 35
  }, {
    id: o.BackgroundGradientPresetId.CHROMA_GLOW,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_CHROMA_GLOW_1,
      stop: 3.94
    }, {
      token: l.Color.BG_GRADIENT_CHROMA_GLOW_2,
      stop: 26.1
    }, {
      token: l.Color.BG_GRADIENT_CHROMA_GLOW_3,
      stop: 39.82
    }, {
      token: l.Color.BG_GRADIENT_CHROMA_GLOW_4,
      stop: 56.89
    }, {
      token: l.Color.BG_GRADIENT_CHROMA_GLOW_5,
      stop: 76.45
    }],
    angle: 128.92,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_CHROMA_GLOW,
    midpointPercentage: 15
  }, {
    id: o.BackgroundGradientPresetId.FOREST,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_FOREST_1,
      stop: 11.2
    }, {
      token: l.Color.BG_GRADIENT_FOREST_2,
      stop: 29.93
    }, {
      token: l.Color.BG_GRADIENT_FOREST_3,
      stop: 48.64
    }, {
      token: l.Color.BG_GRADIENT_FOREST_4,
      stop: 67.85
    }, {
      token: l.Color.BG_GRADIENT_FOREST_5,
      stop: 83.54
    }],
    angle: 162.27,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_FOREST,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.CRIMSON_MOON,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_CRIMSON_MOON_1,
      stop: 16.17
    }, {
      token: l.Color.BG_GRADIENT_CRIMSON_MOON_2,
      stop: 72
    }],
    angle: 64.92,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_CRIMSON_MOON,
    midpointPercentage: 30
  }, {
    id: o.BackgroundGradientPresetId.MIDNIGHT_BLURPLE,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_MIDNIGHT_BLURPLE_1,
      stop: 11.21
    }, {
      token: l.Color.BG_GRADIENT_MIDNIGHT_BLURPLE_2,
      stop: 61.92
    }],
    angle: 48.17,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_MIDNIGHT_BLURPLE,
    midpointPercentage: 24
  }, {
    id: o.BackgroundGradientPresetId.MARS,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_MARS_1,
      stop: 14.61
    }, {
      token: l.Color.BG_GRADIENT_MARS_2,
      stop: 74.62
    }],
    angle: 170.82,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_MARS,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.DUSK,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_DUSK_1,
      stop: 12.84
    }, {
      token: l.Color.BG_GRADIENT_DUSK_2,
      stop: 85.99
    }],
    angle: 180,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_DUSK,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.UNDER_THE_SEA,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_UNDER_THE_SEA_1,
      stop: 1.91
    }, {
      token: l.Color.BG_GRADIENT_UNDER_THE_SEA_2,
      stop: 48.99
    }, {
      token: l.Color.BG_GRADIENT_UNDER_THE_SEA_3,
      stop: 96.35
    }],
    angle: 179.14,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_UNDER_THE_SEA,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.RETRO_STORM,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_RETRO_STORM_1,
      stop: 5.64
    }, {
      token: l.Color.BG_GRADIENT_RETRO_STORM_2,
      stop: 26.38
    }, {
      token: l.Color.BG_GRADIENT_RETRO_STORM_2,
      stop: 49.92
    }, {
      token: l.Color.BG_GRADIENT_RETRO_STORM_1,
      stop: 73.12
    }],
    angle: 148.71,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_RETRO_STORM,
    midpointPercentage: 61
  }, {
    id: o.BackgroundGradientPresetId.NEON_NIGHTS,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_NEON_NIGHTS_1,
      stop: 0
    }, {
      token: l.Color.BG_GRADIENT_NEON_NIGHTS_2,
      stop: 50
    }, {
      token: l.Color.BG_GRADIENT_NEON_NIGHTS_3,
      stop: 100
    }],
    angle: 180,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_NEON_NIGHTS,
    midpointPercentage: 50
  }, {
    id: o.BackgroundGradientPresetId.STRAWBERRY_LEMONADE,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_STRAWBERRY_LEMONADE_1,
      stop: 18.79
    }, {
      token: l.Color.BG_GRADIENT_STRAWBERRY_LEMONADE_2,
      stop: 49.76
    }, {
      token: l.Color.BG_GRADIENT_STRAWBERRY_LEMONADE_3,
      stop: 80.72
    }],
    angle: 161.03,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_STRAWBERRY_LEMONADE,
    midpointPercentage: 32
  }, {
    id: o.BackgroundGradientPresetId.AURORA,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_AURORA_1,
      stop: 10.39
    }, {
      token: l.Color.BG_GRADIENT_AURORA_2,
      stop: 26.87
    }, {
      token: l.Color.BG_GRADIENT_AURORA_3,
      stop: 48.31
    }, {
      token: l.Color.BG_GRADIENT_AURORA_4,
      stop: 64.98
    }, {
      token: l.Color.BG_GRADIENT_AURORA_5,
      stop: 92.5
    }],
    angle: 239.16,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_AURORA,
    midpointPercentage: 34
  }, {
    id: o.BackgroundGradientPresetId.SEPIA,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_SEPIA_1,
      stop: 14.14
    }, {
      token: l.Color.BG_GRADIENT_SEPIA_2,
      stop: 60.35
    }],
    angle: 69.98,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_SEPIA,
    midpointPercentage: 50
  }],
  c = {
    id: o.BackgroundGradientPresetId.BLURPLE_TWILIGHT,
    theme: l.ThemeTypes.DARK,
    colors: [{
      token: l.Color.BG_GRADIENT_BLURPLE_TWILIGHT_1,
      stop: 11.18
    }, {
      token: l.Color.BG_GRADIENT_BLURPLE_TWILIGHT_2,
      stop: 64.54
    }],
    angle: 47.61,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_BLURPLE_TWILIGHT,
    midpointPercentage: 50
  },
  E = [...d, ..._, c, {
    id: o.BackgroundGradientPresetId.EASTER_EGG,
    theme: l.ThemeTypes.LIGHT,
    colors: [{
      token: l.Color.BG_GRADIENT_EASTER_EGG_1,
      stop: 4
    }, {
      token: l.Color.BG_GRADIENT_EASTER_EGG_2,
      stop: 96
    }],
    angle: 180,
    getName: () => u.default.Messages.CLIENT_THEMES_GRADIENT_EASTER_EGG,
    midpointPercentage: 50
  }];
[..._, ...d], (r = i || (i = {}))[r.DARK = 0] = "DARK", r[r.LIGHT = 1] = "LIGHT", r[r.SYSTEM = 2] = "SYSTEM", l.ThemeTypes.DARK, l.ThemeTypes.LIGHT, l.ThemeTypes.DARKER, l.ThemeTypes.LIGHT, l.ThemeTypes.MIDNIGHT, () => u.default.Messages.THEME_MIDNIGHT;
let I = (0, s.keyBy)(E, "id"),
  T = new Map([
    [o.BackgroundGradientPresetId.BLURPLE_TWILIGHT, a.DismissibleContent.BRAND_REFRESH_CLIENT_THEME_BADGE]
  ])