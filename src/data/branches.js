const MAIN_MAP_LINK =
  'https://www.google.com/maps/place/Fano+Dental+Clinic+And+Laboratory/@10.3013293,123.8933559,281m/data=!3m1!1e3!4m14!1m7!3m6!1s0x33a99956e889a9e5:0xa58384c8418d552e!2sFano+Dental+Clinic+And+Laboratory!8m2!3d10.301386!4d123.893221!16s%2Fg%2F11bwkg0d3d!3m5!1s0x33a99956e889a9e5:0xa58384c8418d552e!8m2!3d10.301386!4d123.893221!16s%2Fg%2F11bwkg0d3d?entry=ttu'

const MAIN_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8!2d123.893221!3d10.301386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99956e889a9e5%3A0xa58384c8418d552e!2sFano%20Dental%20Clinic%20And%20Laboratory!5e0!3m2!1sen!2sph!4v1723520000000!5m2!1sen!2sph'

function dummyEmbed(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`
}

function dummyLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export const branches = [
  {
    id: 'cebu-city',
    name: 'Main Clinic',
    city: 'Cebu City',
    region: 'Cebu',
    address: 'Urgello St., Sambag 1, Cebu City',
    detail: 'B. Fano Bldg., Urgello St., Sambag 1, Cebu City',
    isMain: true,
    mapEmbed: MAIN_MAP_EMBED,
    mapLink: MAIN_MAP_LINK,
  },
  {
    id: 'naga',
    name: 'Naga City Branch',
    city: 'Naga City',
    region: 'Cebu',
    address: 'Naga City, Cebu',
    detail: '2F Eugenia Bldg., N. Bacalso Ave., East Poblacion, Naga City, Cebu',
    mapEmbed: dummyEmbed('Naga City, Cebu, Philippines'),
    mapLink: dummyLink('Naga City, Cebu, Philippines'),
  },
  {
    id: 'liloan',
    name: 'Liloan Branch',
    city: 'Liloan',
    region: 'Cebu',
    address: 'Liloan, Cebu',
    detail: 'Liloan, Cebu',
    mapEmbed: dummyEmbed('Liloan, Cebu, Philippines'),
    mapLink: dummyLink('Liloan, Cebu, Philippines'),
  },
  {
    id: 'talisay',
    name: 'Talisay City Branch',
    city: 'Talisay City',
    region: 'Cebu',
    address: 'Talisay City, Cebu',
    detail: 'Talisay City, Cebu',
    mapEmbed: dummyEmbed('Talisay City, Cebu, Philippines'),
    mapLink: dummyLink('Talisay City, Cebu, Philippines'),
  },
  {
    id: 'baybay',
    name: 'Baybay Leyte Branch',
    city: 'Baybay',
    region: 'Leyte',
    address: 'Baybay, Leyte',
    detail: 'Baybay, Leyte',
    mapEmbed: dummyEmbed('Baybay, Leyte, Philippines'),
    mapLink: dummyLink('Baybay, Leyte, Philippines'),
  },
]

export const MAP_LINK = MAIN_MAP_LINK
export const MAP_EMBED = MAIN_MAP_EMBED
