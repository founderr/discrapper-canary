"use strict";
n.r(t), n.d(t, {
  ApplicationDisclosure: function() {
    return r.ApplicationDisclosureType
  },
  ackDisclosures: function() {
    return l
  },
  getDisclosures: function() {
    return o
  },
  getTextForDisclosure: function() {
    return u
  }
});
var i = n("544891"),
  r = n("921072"),
  s = n("981631"),
  a = n("689938");
async function o(e) {
  let t = s.Endpoints.APPLICATION_DISCLOSURES(e),
    n = await i.HTTP.get({
      url: t,
      retries: 3
    }),
    r = n.body.disclosures,
    a = n.body.acked_disclosures;
  return {
    disclosures: r,
    ackedDisclosures: a,
    allAcked: n.body.all_acked
  }
}
async function l(e, t) {
  let n = s.Endpoints.APPLICATION_DISCLOSURES(e);
  await i.HTTP.post({
    url: n,
    body: {
      disclosures: t
    }
  })
}

function u(e) {
  switch (e) {
    case r.ApplicationDisclosureType.IP_LOCATION:
      return a.default.Messages.OAUTH2_IP_LOCATION_DISCLOSURE;
    case r.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS:
      return a.default.Messages.OAUTH2_ADVERTISEMENTS_DISCLOSURE;
    default:
      return null
  }
}