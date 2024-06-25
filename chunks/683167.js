n.d(t, {
  I: function() {
    return a
  }
});
var s = n(818083),
  i = n(302800);
let l = (0, s.B)({
    kind: "user",
    id: "2024-04_shop_marketing_badge",
    label: "Shop Marketing New Badge Design Experiment",
    defaultConfig: {
      coachtipEdition: i.LM.NONE
    },
    treatments: [{
      id: 1,
      label: "Shy",
      config: {
        coachtipEdition: i.LM.SHY
      }
    }, {
      id: 2,
      label: "Lofi Vibes",
      config: {
        coachtipEdition: i.LM.LOFI_VIBES
      }
    }, {
      id: 3,
      label: "Galaxy",
      config: {
        coachtipEdition: i.LM.GALAXY
      }
    }, {
      id: 4,
      label: "Retro & Pirates",
      config: {
        coachtipEdition: i.LM.RETRO_AND_PIRATES
      }
    }, {
      id: 5,
      label: "Arcade",
      config: {
        coachtipEdition: i.LM.ARCADE
      }
    }, {
      id: 6,
      label: "Tide",
      config: {
        coachtipEdition: i.LM.TIDE
      }
    }]
  }),
  a = e => l.useExperiment({
    location: e
  }).coachtipEdition