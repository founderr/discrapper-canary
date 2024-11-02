var i, l, r, s;
t.d(n, {
    PG: function () {
        return i;
    },
    W$: function () {
        return l;
    },
    lg: function () {
        return c;
    },
    ug: function () {
        return o;
    },
    xh: function () {
        return a;
    }
}),
    ((r = i || (i = {}))[(r.LANDING = 0)] = 'LANDING'),
    (r[(r.SAFETY_CHECK = 1)] = 'SAFETY_CHECK'),
    (r[(r.DEFAULT_CHANNELS = 2)] = 'DEFAULT_CHANNELS'),
    (r[(r.WELCOME_CARD = 3)] = 'WELCOME_CARD'),
    (r[(r.CUSTOMIZATION_QUESTIONS = 4)] = 'CUSTOMIZATION_QUESTIONS'),
    (r[(r.REVIEW = 5)] = 'REVIEW'),
    (r[(r.HOME_SETTINGS = 6)] = 'HOME_SETTINGS');
let a = [0, 1, 2, 4, 6, 5];
((s = l || (l = {}))[(s.TOGGLE_ENABLED = 0)] = 'TOGGLE_ENABLED'), (s[(s.TOGGLE_DISABLED = 1)] = 'TOGGLE_DISABLED'), (s[(s.PREVIEW = 2)] = 'PREVIEW'), (s[(s.EDIT_DEFAULT_CHANNELS = 3)] = 'EDIT_DEFAULT_CHANNELS'), (s[(s.EDIT_CUSTOMIZATION_QUESTIONS = 4)] = 'EDIT_CUSTOMIZATION_QUESTIONS'), (s[(s.EDIT_HOME_SETTINGS = 5)] = 'EDIT_HOME_SETTINGS');
let o = a.filter((e) => 0 !== e);
function c(e) {
    switch (e) {
        case 1:
            return 'Safety Check';
        case 2:
            return 'Default Channels';
        case 4:
            return 'Customization Questions';
        case 6:
            return 'Home Settings';
        default:
            return null;
    }
}
