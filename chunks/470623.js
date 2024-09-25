n.d(t, {
    AF: function () {
        return m;
    },
    NU: function () {
        return I;
    },
    oL: function () {
        return h;
    },
    xH: function () {
        return p;
    }
});
var r = n(47120);
var i = n(652874),
    a = n(781402),
    o = n(731965),
    s = n(430742),
    l = n(752305),
    u = n(592125),
    c = n(703558),
    d = n(883429),
    _ = n(228392);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class f {
    constructor(e, t, n) {
        var r, i, a;
        E(this, 'channelId', void 0),
            E(this, '_set', void 0),
            E(this, 'get', void 0),
            E(this, 'editorHeight', void 0),
            E(this, 'editorAdditionRowHeight', void 0),
            E(this, 'listViewCardHeights', void 0),
            E(this, 'cardHeightVersion', void 0),
            E(this, 'nameError', void 0),
            E(this, 'messageError', void 0),
            E(this, 'appliedTags', void 0),
            E(this, 'popoutOpen', void 0),
            E(this, 'guidelinesOpen', void 0),
            E(this, 'previewing', void 0),
            E(this, 'onboardingExpanded', void 0),
            E(this, 'submitting', void 0),
            E(this, 'formOpen', void 0),
            E(this, 'name', void 0),
            E(this, 'textAreaState', void 0),
            E(this, 'hasClickedForm', void 0),
            E(this, 'titleFocused', void 0),
            E(this, 'bodyFocused', void 0),
            E(this, 'set', void 0),
            E(this, 'setEditorHeight', void 0),
            E(this, 'setEditorAdditionRowHeight', void 0),
            E(this, 'setCardHeight', void 0),
            E(this, 'setNameError', void 0),
            E(this, 'setMessageError', void 0),
            E(this, 'toggleAppliedTag', void 0),
            E(this, 'setPopoutOpen', void 0),
            E(this, 'setGuidelinesOpen', void 0),
            E(this, 'setPreviewing', void 0),
            E(this, 'setSubmitting', void 0),
            E(this, 'setFormOpen', void 0),
            E(this, 'setOnboardingExpanded', void 0),
            E(this, 'setTitleFocused', void 0),
            E(this, 'setBodyFocused', void 0),
            E(this, 'setName', void 0),
            E(this, 'setTextAreaState', void 0),
            E(this, 'setHasClickedForm', void 0),
            E(this, 'resetFormState', void 0),
            E(this, 'setFormOpenFromUserAction', void 0),
            (this.channelId = e),
            (this._set = t),
            (this.get = n),
            (this.editorHeight = 64),
            (this.editorAdditionRowHeight = 0),
            (this.listViewCardHeights = {}),
            (this.cardHeightVersion = 0),
            (this.nameError = null),
            (this.messageError = null),
            (this.appliedTags = new Set()),
            (this.popoutOpen = !1),
            (this.guidelinesOpen = !1),
            (this.previewing = !1),
            (this.onboardingExpanded = !1),
            (this.submitting = !1),
            (this.formOpen = !1),
            (this.name = ''),
            (this.textAreaState = (0, l.eK)('')),
            (this.hasClickedForm = !1),
            (this.titleFocused = !1),
            (this.bodyFocused = !1),
            (this.set = (e) => {
                (0, o.j)(() => this._set(e));
            }),
            (this.setEditorHeight = (e) => {
                this.set({ editorHeight: e });
            }),
            (this.setEditorAdditionRowHeight = (e) => {
                this.set({ editorAdditionRowHeight: e });
            }),
            (this.setCardHeight = (e, t) => {
                let { listViewCardHeights: n, cardHeightVersion: r } = this.get();
                n[e] !== t && ((n[e] = t), this.set({ cardHeightVersion: r + 1 }));
            }),
            (this.setNameError = (e) => {
                this.set({ nameError: e });
            }),
            (this.setMessageError = (e) => {
                this.set({ messageError: e });
            }),
            (this.toggleAppliedTag = (e) => {
                let { appliedTags: t } = this.get();
                (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({ appliedTags: t }), s.Z.changeThreadSettings(this.channelId, { appliedTags: t });
            }),
            (this.setPopoutOpen = (e) => {
                this.set({ popoutOpen: e });
            }),
            (this.setGuidelinesOpen = (e) => {
                this.set({ guidelinesOpen: e });
            }),
            (this.setPreviewing = (e) => {
                this.set({ previewing: e });
            }),
            (this.setSubmitting = (e) => {
                this.set({ submitting: e });
            }),
            (this.setFormOpen = (e) => {
                this.set({ formOpen: e }), d.Z.clearForumSearch(this.channelId);
            }),
            (this.setOnboardingExpanded = (e) => {
                this.set({ onboardingExpanded: e });
            }),
            (this.setTitleFocused = (e) => {
                this.set({ titleFocused: e });
            }),
            (this.setBodyFocused = (e) => {
                this.set({ bodyFocused: e });
            }),
            (this.setName = (e) => {
                this.set({ name: e }), s.Z.changeThreadSettings(this.channelId, { name: e });
            }),
            (this.setTextAreaState = (e) => {
                this.set({ textAreaState: e }), s.Z.saveDraft(this.channelId, e.textValue, c.d.FirstThreadMessage);
            }),
            (this.setHasClickedForm = (e) => {
                this.set({ hasClickedForm: e });
            }),
            (this.resetFormState = () => {
                let e = u.Z.getChannel(this.channelId),
                    t = null == e ? '' : null == e.template ? '' : e.template.trim();
                this.set({
                    name: '',
                    textAreaState: (0, l.eK)(t),
                    appliedTags: new Set(),
                    hasClickedForm: !1
                }),
                    d.Z.clearForumSearch(this.channelId);
            }),
            (this.setFormOpenFromUserAction = () => {
                if (this.hasClickedForm) return;
                let e = u.Z.getChannel(this.channelId);
                null != e &&
                    (0, _.HR)({
                        guildId: e.guild_id,
                        channelId: this.channelId
                    }),
                    this.set({
                        hasClickedForm: !0,
                        formOpen: !0
                    }),
                    d.Z.clearForumSearch(this.channelId);
            });
        let f = u.Z.getChannel(e);
        if (null == f) return;
        let h = null !== (r = c.Z.getThreadSettings(f.id)) && void 0 !== r ? r : {},
            p = null == f.template ? '' : f.template.trim(),
            m = c.Z.getDraft(f.id, c.d.FirstThreadMessage),
            I = (0, l.eK)(null != m && '' !== m.trim() ? m : p);
        (this.name = null !== (i = h.name) && void 0 !== i ? i : ''), (a = new Set(h.appliedTags)), (this.appliedTags = void 0 !== a ? a : new Set()), (this.formOpen = this.name.length > 0), (this.textAreaState = I);
    }
}
let { Provider: h, useStore: p, useStoreApi: m } = (0, a.Z)();
function I(e) {
    return (0, i.Z)((t, n) => new f(e.id, t, n));
}
