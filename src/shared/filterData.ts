const cities = [
    { name: "perth", id: 1, country: 'Austrailia' },
    { name: "dubai", id: 2, country: 'United arab emirates' },
    { name: "dollas", id: 3, country: 'United states of america' }
]
const countries = [
    { name: "Austrailia", id: 1 },
    { name: "United arab emirates", id: 2 },
    { name: "United states of america", id: 3 }
];

export function countryData() {
    return countries
}

export function cityData() {
    return cities
}