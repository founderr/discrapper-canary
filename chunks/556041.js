var r = n(735250);
n(470079);
var i = n(481060),
    a = n(600164),
    o = n(245315),
    s = n(689938),
    l = n(905702);
let u = () =>
    (0, r.jsxs)(a.Z, {
        align: a.Z.Align.CENTER,
        justify: a.Z.Justify.CENTER,
        direction: a.Z.Direction.VERTICAL,
        className: l.popout,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: (0, o.QA)(),
                className: l.avatar
            }),
            (0, r.jsxs)(a.Z, {
                align: a.Z.Align.CENTER,
                justify: a.Z.Justify.CENTER,
                className: l.nameWrapper,
                children: [
                    (0, r.jsx)(i.Tooltip, {
                        text: s.Z.Messages.STAFF_BADGE_TOOLTIP,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                ...e,
                                className: l.staffBadge
                            })
                    }),
                    (0, r.jsx)(i.Heading, {
                        className: l.header,
                        variant: 'heading-md/semibold',
                        children: s.Z.Messages.ANNOUNCEMENT_GUILD_POPOUT_NAME
                    })
                ]
            }),
            (0, r.jsx)(i.Text, {
                className: l.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: s.Z.Messages.ANNOUNCEMENT_GUILD_DESCRIPTION
            }),
            (0, r.jsx)(i.Text, {
                className: l.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: s.Z.Messages.ANNOUNCEMENT_GUILD_HERE_TO_HELP
            })
        ]
    });
t.Z = u;
