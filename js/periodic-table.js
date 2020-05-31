class PeriodicTable{
    constructor(){
        this.atoms = this.makeAtoms()
    }
    makeAtoms(){
        return [
            new Atom('Hydrogen', '#63b9d5', 1, 'H', 1.00794),
            new Atom('Helium', '#d1c991', 2, 'He', 4.002602),
            new Atom('Lithium', '#4c6168', 3, 'Li', 6.941),
            new Atom('Beryllium', '#c8c8c8', 4, 'Be', 9.012182),
            new Atom('Boron', '#7d5353', 5, 'B', 10.811),
            new Atom('Carbon', '#3b3b3b', 6, 'C', 12.0107),
            new Atom('Nitrogen', '#2cc6b2', 7, 'N', 14.0067),
            new Atom('Oxygen', '#6fec98', 8, 'O', 15.9994),
            new Atom('Fluorine', '#ecc46f', 9, 'F', 18.9984032),
            new Atom('Neon', '#be0086', 10, 'Ne', 20.1797),
            new Atom('Sodium', '#e69d7a', 11, 'Na', 22.98976928),
            new Atom('Magnesium', '#9e80ea', 12, 'Mg', 24.305),
            new Atom('Aluminum', '#797979', 13, 'Al', 27),
            new Atom('Silicon', '#4a4070', 14, 'Si', 28.0855),
            new Atom('Phosphorus', '#d7463f', 15, 'P', 30.973762),
            new Atom('Sulfur', '#375e7c', 16, 'S', 32.065),
            new Atom('Chlorine', '#6d1d7b', 17, 'Cl', 35.453),
            new Atom('Argon', '#9a3da5', 18, 'Ar', 39.948),
            new Atom('Potassium', '#4d8946', 19, 'K', 39.0983),
            new Atom('Calcium', '#f0f0f0', 20, 'Ca', 40.078),
            new Atom('Scandium', '#5fbb77', 21, 'Sc', 44.955912),
            new Atom('Titanium', '#5a5a5a', 22, 'Ti', 47.867),
            new Atom('Vanadium', '#5f9ebb', 23, 'V', 50.9415),
            new Atom('Chromium', '#a488b5', 24, 'Cr', 51.9961),
            new Atom('Manganese', '#dc4a4a', 25, 'Mn', 54.938045),
            new Atom('Iron', '#ab967d', 26, 'Fe', 55.845),
            new Atom('Cobalt', '#4371e6', 27, 'Co', 58.933195),
            new Atom('Nickel', '#bac395', 28, 'Ni', 58.6934),
            new Atom('Copper', '#b95739', 29, 'Cu', 63.546),
            new Atom('Zinc', '#b4b4b4', 30, 'Zn', 65.409),
            new Atom('Gallium', '#39b975', 31, 'Ga', 69.723),
            new Atom('Germanium', '#979273', 32, 'Ge', 72.64),
            new Atom('Arsenic', '#738498', 33, 'As', 74.9216),
            new Atom('Selenium', '#424242', 34, 'Se', 78.96),
            new Atom('Bromine', '#d4753c', 35, 'Br', 79.904),
            new Atom('Krypton', '#3ca0d4', 36, 'Kr', 83.798),
            new Atom('Rubidium', '#d22c1f', 37, 'Rb', 85.4678),
            new Atom('Strontium', '#ff9d29', 38, 'Sr', 87.62),
            new Atom('Yttrium', '#b129ff', 39, 'Y', 88.90585),
            new Atom('Zirconium', '#d6e43a', 40, 'Zr', 91.224),
            new Atom('Niobium', '#75dceb', 41, 'Nb', 92.906),
            new Atom('Molybdenum', '#8ba38c', 42, 'Mo', 95.94),
            new Atom('Technetium', '#eea1e2', 43, 'Tc', 98),
            new Atom('Ruthenium', '#563e32', 44, 'Ru', 101.07),
            new Atom('Rhodium', '#88d17a', 45, 'Rh', 102.905),
            new Atom('Palladium', '#9eabbe', 46, 'Pd', 106.42),
            new Atom('Silver', '#dcdcdc', 47, 'Ag', 107.8682),
            new Atom('Cadmium', '#5560c8', 48, 'Cd', 112.411),
            new Atom('Indium', '#408d3c', 49, 'In', 114.818),
            new Atom('Tin', '#b5a47c', 50, 'Sn', 118.71),
            new Atom('Antimony', '#c6598c', 51, 'Sb', 121.76),
            new Atom('Tellurium', '#827498', 52, 'Te', 128.6),
            new Atom('Iodine', '#ff00fc', 53, 'I', 126.904),
            new Atom('Xenon', '#7888ff', 54, 'Xe', 131.293),
            new Atom('Caesium', '#ffd478', 55, 'Cs', 132.9054519),
            new Atom('Barium', '#e99c9c', 56, 'Ba', 137.327),
            new Atom('Lanthanum', '#8bdbbe', 57, 'La', 138.90547),
            new Atom('Cerium', '#ff9329', 58, 'Ce', 140.116),
            new Atom('Praseodymium', '#56e019', 59, 'Pr', 140.90765),
            new Atom('Neodymium', '#65898d', 60, 'Nd', 144.242),
            new Atom('Promethium', '#2ee99b', 61, 'Pm', 145),
            new Atom('Samarium', '#bd6475', 62, 'Sm', 150.36),
            new Atom('Europium', '#6c64bd', 63, 'Eu', 151.964),
            new Atom('Gadolinium', '#6e1289', 64, 'Gd', 157.25),
            new Atom('Terbium', '#359c50', 65, 'Tb', 158.92535),
            new Atom('Dysprosium', '#447ee7', 66, 'Dy', 162.5),
            new Atom('Holmium', '#e77d46', 67, 'Ho', 164.93),
            new Atom('Erbium', '#bf4987', 68, 'Er', 167.259),
            new Atom('Thulium', '#21426b', 69, 'Tm', 168.93421),
            new Atom('Ytterbium', '#878750', 70, 'Yb', 173.04),
            new Atom('Lutetium', '#d12c2c', 71, 'Lu', 174.967),
            new Atom('Hafnium', '#91d12c', 72, 'Hf', 178.49),
            new Atom('Tantalum', '#7f87Af', 73, 'Ta', 180.94788),
            new Atom('Tungsten', '#2b6aa5', 74, 'W', 183.84),
            new Atom('Rhenium', '#512f2f', 75, 'Re', 186.207),
            new Atom('Osmium', '#307060', 76, 'Os', 190.23),
            new Atom('Iridium', '#c9876a', 77, 'Ir', 192.217),
            new Atom('Platinum', '#505008', 78, 'Pt', 195.084),
            new Atom('Gold', '#edc474', 79, 'Au', 196.966569),
            new Atom('Mercury', '#80a5ac', 80, 'Hg', 200.59),
            new Atom('Thallium', '#ac8089', 81, 'Tl', 204.3833),
            new Atom('Lead', '#3c7c66', 82, 'Pb', 207.2),
            new Atom('Bismuth', '#ff0506', 83, 'Bi', 208.9804),
            new Atom('Polonium', '#ffff00', 84, 'Po', 210),
            new Atom('Astatine', '#00ff00', 85, 'At', 210),
            new Atom('Radon', '#dae83a', 86, 'Rn', 222),
            new Atom('Francium', '#ff6c00', 87, 'Fr', 223),
            new Atom('Radium', '#00ffff', 88, 'Ra', 226),
            new Atom('Actinium', '#424918', 89, 'Ac', 227),
            new Atom('Thorium', '#aa3d82', 90, 'Th', 232.03806),
            new Atom('Protactinium', '#3daa82', 91, 'Pr', 231.03588),
            new Atom('Uranium', '#9cff00', 92, 'U', 238.02891),
            new Atom('Neptunium', '#00aeff', 93, 'Np', 237),
            new Atom('Plutonium', '#ff9000', 94, 'Pu', 244),
            new Atom('Americium', '#813349', 95, 'Am', 243),
            new Atom('Curium', '#ff79d0', 96, 'Cm', 247),
            new Atom('Berkelium', '#ae877e', 97, 'Bk', 247),
            new Atom('Californium', '#8f3cb4', 98, 'Cf', 251),
            new Atom('Einsteinium', '#86c4dc', 99, 'Es', 252),
            new Atom('Fermium', '#bfdc86', 100, 'Fm', 257),
            new Atom('Mendelevium', '#dc8686', 101, 'Md', 258),
            new Atom('Nobelium', '#ffd965', 102, 'No', 259),
            new Atom('Lawrencium', '#5c24a0', 103, 'Lr', 262),
            new Atom('Rutherfordium', '#6b6675', 104, 'Rf', 261),
            new Atom('Dubnium', '#b05032', 105, 'Db', 262),
            new Atom('Seaborgium', '#254987', 106, 'Sg', 266),
            new Atom('Bohrium', '#9bafa0', 107, 'Bh', 264),
            new Atom('Hassium', '#ff562d', 108, 'Hs', 277),
            new Atom('Meitnerium', '#cdcd2c', 109, 'Mt', 268),
            new Atom('Darmstadtium', '#3a7e48', 110, 'Ds', 271),
            new Atom('Roentgenium', '#0000ff', 111, 'Rg', 272),
            new Atom('Copernicium', '#aa4594', 112, 'Cn', 277),
            new Atom('Nihonium', '#8f8f8f', 113, 'Nh', 284),
            new Atom('Flerovium', '#2eede6', 114, 'Fl', 289),
            new Atom('Moscovium', '#beaf64', 115, 'Mc', 288),
            new Atom('Livermorium', '#f22e6a', 116, 'Lv', 292),
            new Atom('Tennessine', '#70ea78', 117, 'Ts', 288),
            new Atom('Oganesson', '#ff00b9', 118, 'Og', 294)
            // Fictices Atoms
            // new Atom('Bananium', '#ede674', 119, 'Bn',),
            // new Atom('GravityBlockium', '#3de6c3', 120, 'Gb',),
            // new Atom('BreakingBadium', '#309141', 121, 'Bb',),
            // new Atom('314159265359', '#4dc8e6', 122, 'Pi',),
            // new Atom('Sirnicanium', '#ff0000', 123, 'Sir',),
            // new Atom('Earthium', '#1177f5', 124, 'Ea',),
            // new Atom('Unbipentium', '#000000', 125, 'Ubp')
        ]
    }
}