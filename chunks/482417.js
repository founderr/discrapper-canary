t.d(n, {
  Z: function() {
return s;
  }
}), t(47120);
var l = t(423875),
  r = t(740605),
  i = t(206583),
  a = t(616922),
  o = t(689938);

function s(e) {
  let n, {
  entry: t
} = e,
s = t.extra.entries[0].media,
c = s.artists[0],
{
  title: u,
  provider: d,
  image_url: m
} = s,
f = c.name,
_ = () => (0, r.o)(a.Hw.TRACK, s.external_id);
  return d === l.p.SPOTIFY && (n = {
type: i.kG.SPOTIFY,
'aria-label': o.Z.Messages.SPOTIFY
  }), {
title: u,
subtitle: f,
thumbnailUrl: m,
onClickTitle: _,
onClickSubtitle: () => (0, r.o)(a.Hw.ARTIST, c.external_id),
onClickThumbnail: _,
userDescription: o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
providerIconProps: n
  };
}