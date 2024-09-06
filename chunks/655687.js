n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(933557),
    s = n(981631),
    a = n(689938);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.ZP)(e, !0),
        l = (0, i.ZP)(e, !1);
    if (null == e || null == n)
        return {
            placeholder: '',
            accessibilityLabel: ''
        };
    if (t)
        return {
            placeholder: a.Z.Messages.READ_ONLY_CHANNEL,
            accessibilityLabel: a.Z.Messages.READ_ONLY_CHANNEL
        };
    if (e.isForumPost())
        return {
            placeholder: a.Z.Messages.FORUM_POST_TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: a.Z.Messages.TEXTAREA_FORUM_POST_A11Y_LABEL.format({ channel: l })
        };
    if (s.TPd.THREADS.has(e.type))
        return {
            placeholder: a.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: a.Z.Messages.TEXTAREA_THREAD_A11Y_LABEL.format({ channel: l })
        };
    if (e.type === s.d4z.DM)
        return {
            placeholder: a.Z.Messages.DM_TEXTAREA_PLACEHOLDER.format({ channel: n }),
            accessibilityLabel: a.Z.Messages.TEXTAREA_TEXT_DM_A11Y_LABEL.format({ channel: l })
        };
    return {
        placeholder: a.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: n }),
        accessibilityLabel: a.Z.Messages.TEXTAREA_TEXT_CHANNEL_A11Y_LABEL.format({ channel: l })
    };
}
