n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(47120);
var i = n(512722),
    a = n.n(i),
    o = n(911969),
    s = n(689938);
let l = (e, t) => {
        let { minValues: n, maxValues: r } = e;
        if (null == t) return 0 === n ? null : s.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({ count: n });
        if (t.type === o.re.STRING_SELECT) {
            if (t.values.length < n) return s.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({ count: n });
            if (t.values.length > r) return s.Z.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({ count: r });
        } else {
            if (t.selectedOptions.length < n) return s.Z.Messages.MESSAGE_SELECT_COMPONENT_SELECT_REQUIREMENT.format({ count: n });
            if (t.selectedOptions.length > r) return s.Z.Messages.MESSAGE_SELECT_COMPONENT_MAX_SELECT_REQUIREMENT.format({ count: r });
        }
        return null;
    },
    u = (e, t) => {
        let { minLength: n, maxLength: r, required: i } = e;
        if (null == t || 0 === t.value.length)
            return i
                ? s.Z.Messages.FORM_LENGTH_ERROR.format({
                      min: n,
                      max: r
                  })
                : null;
        return t.value.length < n || t.value.length > r
            ? s.Z.Messages.FORM_LENGTH_ERROR.format({
                  min: n,
                  max: r
              })
            : null;
    };
function c(e, t) {
    switch ((null != t && a()(t.type === e.type, 'component type matches state'), e.type)) {
        case o.re.BUTTON:
            return null;
        case o.re.STRING_SELECT:
        case o.re.USER_SELECT:
        case o.re.ROLE_SELECT:
        case o.re.MENTIONABLE_SELECT:
        case o.re.CHANNEL_SELECT:
            return l(e, t);
        case o.re.INPUT_TEXT:
            return u(e, t);
        default:
            a()(!1, 'missing validator for this component');
    }
}
