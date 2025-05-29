// const questions = [
//     {
//         question: "What is the capital of France?",
//         correctAnswer: "Paris",
//         wrongAnswers: ["Lyon", "Marseille", "Toulouse"]
//     },
//     {
//         question: "What is 2 + 2?",
//         correctAnswer: "4",
//         wrongAnswers: ["3", "5", "22"]
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         correctAnswer: "Mars",
//         wrongAnswers: ["Jupiter", "Saturn", "Venus"]
//     }
// ];

// const questions = [
// 	{
// 		question:
// 			"What process is defined as the splitting of a heavy nucleus into smaller nuclei?",
// 		correctAnswer: "Nuclear Fission",
// 		wrongAnswers: ["Nuclear Fusion", "Radioactive decay", "Chain reaction"],
// 	},
// 	{
// 		question:
// 			"What process is defined as the combining of light nuclei to form a heavier nucleus?",
// 		correctAnswer: "Nuclear Fusion",
// 		wrongAnswers: ["Radioactive decay", "Nuclear Fission", "Chain reaction"],
// 	},
// 	{
// 		question:
// 			"Which of the following fuels is most commonly used in nuclear power plants operating today?",
// 		correctAnswer: "Uranium-235 (U-235)",
// 		wrongAnswers: [
// 			"Hydrogen isotopes (Deuterium, Tritium)",
// 			"Plutonium-239 (Pu-239)",
// 			"Thorium-232 (Th-232)",
// 		],
// 	},
// 	{
// 		question:
// 			"Which of the following is a fertile material that can be converted to fissile Uranium-233?",
// 		correctAnswer: "Thorium-232 (Th-232)",
// 		wrongAnswers: [
// 			"Hydrogen isotopes (Deuterium, Tritium)",
// 			"Plutonium-239 (Pu-239)",
// 			"Uranium-235 (U-235)",
// 		],
// 	},
// 	{
// 		question: "What is a key condition required for achieving nuclear fusion?",
// 		correctAnswer: "Extremely high temperature (~100 million °C)",
// 		wrongAnswers: [
// 			"Moderate temperature and pressure",
// 			"A critical mass of fuel",
// 			"Cooling with ordinary water",
// 		],
// 	},
// 	{
// 		question:
// 			"What is a key condition required for achieving nuclear fission in current power plants?",
// 		correctAnswer: "Moderate temperature and pressure",
// 		wrongAnswers: [
// 			"Extremely high temperature (~100 million °C)",
// 			"Need for external lithium breeding",
// 			"Minimal radioactive waste",
// 		],
// 	},
// 	{
// 		question:
// 			"Which nuclear power plant component is responsible for converting thermal energy from steam into mechanical energy (rotational motion)?",
// 		correctAnswer: "Turbine",
// 		wrongAnswers: ["Generator", "Condenser", "Steam Generator"],
// 	},
// 	{
// 		question:
// 			"Which nuclear power plant component is attached to the turbine and converts mechanical energy into electrical energy?",
// 		correctAnswer: "Generator",
// 		wrongAnswers: ["Condenser", "Steam Generator", "Turbine"],
// 	},
// 	{
// 		question:
// 			"What type of nuclear waste includes items like clothing, tools, or filters that have been exposed to radiation and is often safely buried in shallow landfills?",
// 		correctAnswer: "Low-Level Waste (LLW)",
// 		wrongAnswers: [
// 			"High-Level Waste (HLW)",
// 			"Intermediate-Level Waste (ILW)",
// 			"Spent Fuel",
// 		],
// 	},
// 	{
// 		question:
// 			"What type of nuclear waste comes mainly from spent nuclear fuel, is extremely radioactive, and requires cooling and secure long-term storage?",
// 		correctAnswer: "High-Level Waste (HLW)",
// 		wrongAnswers: [
// 			"Intermediate-Level Waste (ILW)",
// 			"Low-Level Waste (LLW)",
// 			"Decommissioning Waste",
// 		],
// 	},
// 	{
// 		question:
// 			"Which factor contributes significantly to the high upfront costs (CAPEX) of building a nuclear reactor?",
// 		correctAnswer: "Licensing, site preparation, and design",
// 		wrongAnswers: ["Fuel costs", "Staff salaries", "Spent fuel management"],
// 	},
// 	{
// 		question:
// 			"Which factor represents a relatively low ongoing operating cost for a nuclear reactor once built?",
// 		correctAnswer: "Fuel costs",
// 		wrongAnswers: [
// 			"Spent Fuel Management",
// 			"Staff salaries",
// 			"Maintenance and inspections",
// 		],
// 	},
// 	{
// 		question:
// 			"Which major nuclear incident in 2011 was caused by a massive earthquake and tsunami disabling backup generators, leading to loss of cooling?",
// 		correctAnswer: "Fukushima Daiichi",
// 		wrongAnswers: ["Chernobyl", "Three Mile Island", "Kyshtym"],
// 	},
// 	{
// 		question:
// 			"Which major nuclear incident in 1986 was caused by a flawed reactor design combined with serious operator errors during a safety test?",
// 		correctAnswer: "Chernobyl",
// 		wrongAnswers: ["Three Mile Island", "Kyshtym", "Fukushima Daiichi"],
// 	},
// 	{
// 		question:
// 			"What is listed as a key environmental advantage of nuclear power?",
// 		correctAnswer: "Very low greenhouse gas emissions",
// 		wrongAnswers: [
// 			"Minimal radioactive waste",
// 			"No risk of accidents",
// 			"Low water usage",
// 		],
// 	},
// 	{
// 		question:
// 			"What is listed as a key environmental disadvantage of nuclear power?",
// 		correctAnswer: "Radioactive Waste requiring long-term storage",
// 		wrongAnswers: [
// 			"Extremely high energy density",
// 			"Small land footprint",
// 			"Reduced air pollution",
// 		],
// 	},

// 	{
// 		question:
// 			"What process is defined as the splitting of a heavy nucleus into smaller nuclei?",
// 		correctAnswer: "Nuclear Fission",
// 		wrongAnswers: ["Nuclear Fusion", "Radioactive decay", "Chain reaction"],
// 	},
// 	{
// 		question:
// 			"What process is defined as the combining of light nuclei to form a heavier nucleus?",
// 		correctAnswer: "Nuclear Fusion",
// 		wrongAnswers: ["Radioactive decay", "Nuclear Fission", "Chain reaction"],
// 	},
// 	{
// 		question:
// 			"Which of the following fuels is most commonly used in nuclear power plants operating today?",
// 		correctAnswer: "Uranium-235 (U-235)",
// 		wrongAnswers: [
// 			"Hydrogen isotopes (Deuterium, Tritium)",
// 			"Plutonium-239 (Pu-239)",
// 			"Thorium-232 (Th-232)",
// 		],
// 	},
// 	{
// 		question:
// 			"Which of the following is a fertile material that can be converted to fissile Uranium-233?",
// 		correctAnswer: "Thorium-232 (Th-232)",
// 		wrongAnswers: [
// 			"Hydrogen isotopes (Deuterium, Tritium)",
// 			"Plutonium-239 (Pu-239)",
// 			"Uranium-235 (U-235)",
// 		],
// 	},
// 	{
// 		question:
// 			"What type of energy output is associated with Nuclear Fusion compared to Fission per unit mass?",
// 		correctAnswer: "Extremely high",
// 		wrongAnswers: ["High, but less than fission", "Lower", "Similar"],
// 	},
// 	{
// 		question:
// 			"Which of the following is listed as a byproduct of nuclear fission?",
// 		correctAnswer: "Radioactive waste",
// 		wrongAnswers: [
// 			"Minimal radioactive waste (mostly harmless helium)",
// 			"Water vapor",
// 			"Oxygen",
// 		],
// 	},
// 	{
// 		question:
// 			"Which type of nuclear reaction requires extremely high temperature (~100 million °C) to sustain?",
// 		correctAnswer: "Nuclear Fusion",
// 		wrongAnswers: ["Nuclear Fission", "Radioactive decay", "Chain reaction"],
// 	},
// 	{
// 		question:
// 			"What is the current use status of Nuclear Fusion as an energy source?",
// 		correctAnswer: "Experimental only",
// 		wrongAnswers: [
// 			"Used in nuclear power plants",
// 			"Commercial use since the 20th century",
// 			"Not currently researched",
// 		],
// 	},
// 	{
// 		question:
// 			"Which of the following is listed as a safety concern for nuclear fission power plants?",
// 		correctAnswer: "Risk of meltdown and radioactive release",
// 		wrongAnswers: [
// 			"Hard to achieve uncontrolled reaction",
// 			"Minimal radioactive waste",
// 			"Low temperature requirements",
// 		],
// 	},
// 	{
// 		question:
// 			"Which hydrogen isotope is radioactive and must be bred from lithium inside fusion reactors?",
// 		correctAnswer: "Tritium (³H or T)",
// 		wrongAnswers: ["Deuterium (²H or D)", "Protium (¹H)", "Hydrogen-4"],
// 	},
// 	{
// 		question:
// 			"Lithium is mentioned as a material used in fusion research for what purpose?",
// 		correctAnswer:
// 			"Used to breed tritium when bombarded with neutrons and helps in plasma control",
// 		wrongAnswers: [
// 			"Common fuel source",
// 			"Used as a coolant",
// 			"Primary structural material",
// 		],
// 	},
// 	{
// 		question: "What process generates energy in the Sun's core?",
// 		correctAnswer: "Hydrogen nuclei fuse to form one helium nucleus",
// 		wrongAnswers: [
// 			"Uranium atoms undergo fission",
// 			"Carbon atoms burn",
// 			"Solar panels convert sunlight to energy",
// 		],
// 	},
// 	{
// 		question:
// 			"In a nuclear power plant, what component circulates around the fuel rods, absorbing the heat produced by fission?",
// 		correctAnswer: "Water (Coolant)",
// 		wrongAnswers: ["Steam", "Containment Structure", "Generator"],
// 	},
// 	{
// 		question: "What is the function of the turbine in a nuclear power plant?",
// 		correctAnswer:
// 			"Converts thermal energy from steam into mechanical energy (rotational motion)",
// 		wrongAnswers: [
// 			"Absorbs heat from fuel rods",
// 			"Generates electricity",
// 			"Cools down used steam",
// 		],
// 	},
// 	{
// 		question:
// 			"What type of nuclear waste comes mainly from spent (used) nuclear fuel and is extremely radioactive?",
// 		correctAnswer: "High-Level Waste (HLW)",
// 		wrongAnswers: [
// 			"Low-Level Waste (LLW)",
// 			"Intermediate-Level Waste (ILW)",
// 			"Decommissioning Waste",
// 		],
// 	},
// 	{
// 		question:
// 			"Why is spent nuclear fuel not typically used again in most current reactors?",
// 		correctAnswer:
// 			"Fuel composition changes after being used, reprocessing is expensive, most reactors aren’t designed for recycled fuel, and there are political and public concerns like nuclear weapons proliferation",
// 		wrongAnswers: [
// 			"It becomes harmless after leaving the reactor",
// 			"There is no energy left in spent fuel",
// 			"Environmental regulations prohibit its reuse",
// 			"It is not possible to reprocess it technologically",
// 		],
// 	},
// 	{
// 		question:
// 			"What is the typical CAPEX (Capital Expenditure) range mentioned for building a single nuclear reactor (1–1.6 GW capacity)?",
// 		correctAnswer: "$6–12 billion USD",
// 		wrongAnswers: [
// 			"$500 million–$1 billion USD",
// 			"$1–2 billion USD",
// 			"$20–30 billion USD",
// 		],
// 	},
// 	{
// 		question:
// 			"Which of the following is listed as a key factor contributing to the CAPEX of a nuclear reactor?",
// 		correctAnswer:
// 			"Licensing, site preparation, design, materials and labor, and delays",
// 		wrongAnswers: [
// 			"Fuel costs and staff salaries",
// 			"Spent fuel management",
// 			"Decommissioning costs",
// 		],
// 	},
// 	{
// 		question:
// 			"Which part of the nuclear fuel cycle is described as relatively low in cost?",
// 		correctAnswer: "Uranium Mining & Milling",
// 		wrongAnswers: [
// 			"Enrichment & Fabrication",
// 			"Spent Fuel Management",
// 			"Decommissioning",
// 		],
// 	},
// 	{
// 		question: "What is listed as a major advantage of nuclear energy?",
// 		correctAnswer: "Very low greenhouse gas emissions",
// 		wrongAnswers: [
// 			"Extremely high upfront costs",
// 			"Long construction times",
// 			"Complex waste and decommissioning issues",
// 		],
// 	},
// 	{
// 		question: "What is listed as a major disadvantage of nuclear energy?",
// 		correctAnswer: "Extremely high upfront costs and financial risk",
// 		wrongAnswers: [
// 			"Low operating costs once built",
// 			"Stable, large-scale electricity supply",
// 			"Very low greenhouse gas emissions",
// 		],
// 	},
// 	{
// 		question:
// 			"Which major nuclear incident was caused by a massive earthquake and tsunami disabling backup generators, leading to loss of cooling and hydrogen explosions?",
// 		correctAnswer: "Fukushima Daiichi, Japan (2011)",
// 		wrongAnswers: [
// 			"Chernobyl, USSR (Ukraine) (1986)",
// 			"Kyshtym, USSR (Russia) (1957)",
// 			"Three Mile Island, USA",
// 		],
// 	},
// 	{
// 		question: "What was a cause of the Chernobyl nuclear incident?",
// 		correctAnswer:
// 			"A flawed reactor design combined with serious operator errors during a safety test",
// 		wrongAnswers: [
// 			"Failure of a cooling system in a tank of liquid radioactive waste",
// 			"Mechanical failure and human error leading to partial core meltdown",
// 			"A massive earthquake and tsunami",
// 		],
// 	},
// 	{
// 		question:
// 			"Which environmental impact is associated with nuclear plants discharging heated water into rivers or oceans?",
// 		correctAnswer: "Thermal Pollution",
// 		wrongAnswers: ["Radioactive Waste", "Air Pollution", "Land Degradation"],
// 	},
// 	{
// 		question:
// 			"What is one environmental issue mentioned regarding Uranium mining and processing?",
// 		correctAnswer:
// 			"Land degradation, water contamination, and exposure to radiation",
// 		wrongAnswers: [
// 			"Minimal radioactive waste generation",
// 			"Only emits harmless helium",
// 			"Requires very little land",
// 		],
// 	},
// 	{
// 		question:
// 			"Compared to coal or gas plants, nuclear reactors do not emit harmful pollutants like sulfur dioxide, nitrogen oxides, or particulate matter. Which advantage does this relate to?",
// 		correctAnswer: "Reduced Air Pollution",
// 		wrongAnswers: [
// 			"Low Greenhouse Gas Emissions",
// 			"Small Land Footprint",
// 			"High Energy Density",
// 		],
// 	},
// 	{
// 		question:
// 			"Uranium contains significantly more energy per unit mass than fossil fuels. Which advantage does this relate to?",
// 		correctAnswer: "High Energy Density",
// 		wrongAnswers: [
// 			"Reduced Air Pollution",
// 			"Small Land Footprint",
// 			"Low Greenhouse Gas Emissions",
// 		],
// 	},
// 	{
// 		question:
// 			"How many reactors is Egypt currently constructing and what is their capacity?",
// 		correctAnswer: "4 reactors with a capacity of 1100 MWe each",
// 		wrongAnswers: [
// 			"1 reactor with a capacity of 1000 MWe",
// 			"2 reactors with a capacity of 1200 MWe each",
// 			"6 reactors with a capacity of 800 MWe each",
// 		],
// 	},
// 	// Hydropower
// 	{
// 		question: "What is the primary purpose of a dam?",
// 		correctAnswer: "To control and store water, creating a reservoir",
// 		wrongAnswers: [
// 			"To divert water into canals for irrigation",
// 			"To release excess heat from a cooling system",
// 			"To breed tritium from lithium",
// 		],
// 	},
// 	{
// 		question: "What is the primary purpose of a barrage?",
// 		correctAnswer:
// 			"To regulate and control water flow, typically to divert water",
// 		wrongAnswers: [
// 			"To store large volumes of water",
// 			"To generate seismic activity",
// 			"To convert thermal energy into mechanical energy",
// 		],
// 	},
// 	{
// 		question:
// 			"Which hydropower structure typically creates a reservoir by impounding water behind it?",
// 		correctAnswer: "Dam",
// 		wrongAnswers: ["Barrage", "Cooling Tower", "Steam Generator"],
// 	},
// 	{
// 		question:
// 			"Which hydropower structure consists of a series of gates or barriers that can be opened or closed to manage water movement?",
// 		correctAnswer: "Barrage",
// 		wrongAnswers: ["Dam", "Reactor Containment Structure", "Turbine"],
// 	},
// 	{
// 		question:
// 			"Compared to dams, what is a characteristic impact of barrages on the environment?",
// 		correctAnswer: "Little or No Impact",
// 		wrongAnswers: [
// 			"Significant Impact",
// 			"Causes thermal pollution",
// 			"Generates high levels of radioactive waste",
// 		],
// 	},
// 	{
// 		question:
// 			"A hydropower plant with a capacity ranging from 1 MW to 10-30 MW is classified as what type?",
// 		correctAnswer: "Small Hydropower",
// 		wrongAnswers: ["Micro Hydropower", "Mini Hydropower", "Large Hydropower"],
// 	},
// 	{
// 		question:
// 			"A hydropower plant with a capacity above 10-30 MW is classified as what type?",
// 		correctAnswer: "Large Hydropower",
// 		wrongAnswers: ["Micro Hydropower", "Mini Hydropower", "Small Hydropower"],
// 	},
// 	{
// 		question: "What is the capacity range for Micro Hydropower?",
// 		correctAnswer: "1 kW to 100 kW",
// 		wrongAnswers: ["100 kW to 1 MW", "1 MW to 10 MW", "Above 30 MW"],
// 	},
// 	{
// 		question: "What is the capacity range for Mini Hydropower?",
// 		correctAnswer: "100 kW to 1 MW",
// 		wrongAnswers: ["1 kW to 100 kW", "1 MW to 10 MW", "Above 30 MW"],
// 	},
// 	{
// 		question: "What type of material are dams typically constructed from?",
// 		correctAnswer: "Solid Concrete",
// 		wrongAnswers: ["Steel Lattice", "Wood Planks", "Reinforced Plastic Sheets"],
// 	},
// 	{
// 		question:
// 			"Besides hydroelectric power generation, what is a significant purpose of dams related to managing water resources?",
// 		correctAnswer:
// 			"Water supply (for drinking, irrigation, industrial use) and flood control",
// 		wrongAnswers: [
// 			"Enhancing air quality through water filtration",
// 			"Increasing wind speed for wind farms",
// 			"Extracting geothermal heat from deep reservoirs",
// 		],
// 	},
// 	{
// 		question:
// 			"Barrages are commonly used for what specific purpose by redirecting water into canals?",
// 		correctAnswer: "Irrigation",
// 		wrongAnswers: [
// 			"Creating large recreational lakes",
// 			"Deep geological waste storage",
// 			"Breeding tritium from lithium",
// 		],
// 	},
// 	{
// 		question:
// 			"Which environmental impact of large dams is associated with the pressure from the structure and the reservoir water?",
// 		correctAnswer: "Geological Effects (e.g., seismic activity)",
// 		wrongAnswers: [
// 			"Radioactive waste generation",
// 			"Thermal pollution",
// 			"High greenhouse gas emissions",
// 		],
// 	},
// 	{
// 		question:
// 			"The geological effects, such as induced seismic activity near large dams, are primarily caused by what factor?",
// 		correctAnswer: "Pressure from the dam structure and the reservoir water",
// 		wrongAnswers: [
// 			"Release of toxic chemicals from the reservoir bed",
// 			"Sonic vibrations from the turbines",
// 			"Accumulation of sediment behind the dam",
// 		],
// 	},
// 	{
// 		question:
// 			"Which environmental impact of hydropower involves restricting the flow of sediments, which can affect farmlands downstream?",
// 		correctAnswer: "Sedimentation",
// 		wrongAnswers: ["Biodiversity loss", "Resettlement", "Thermal pollution"],
// 	},
// 	{
// 		question:
// 			"Sedimentation caused by dams primarily impacts farmlands and agriculture by restricting the flow of what critical resource?",
// 		correctAnswer: "Sediments",
// 		wrongAnswers: ["Nutrients", "Water volume", "Oxygen"],
// 	},
// 	{
// 		question:
// 			"Which environmental impact of hydropower involves the destruction of homes, impacting endangered species, and deforestation?",
// 		correctAnswer: "Biodiversity loss",
// 		wrongAnswers: ["Sedimentation", "Geological Effects", "Thermal pollution"],
// 	},
// 	{
// 		question:
// 			"The need to relocate people whose homes will be destroyed is an environmental impact primarily associated with which type of hydropower structure?",
// 		correctAnswer: "Dams",
// 		wrongAnswers: ["Barrages", "Tidal Power plants", "Solar farms"],
// 	},
// 	{
// 		question:
// 			"Which specific large dam project is mentioned as requiring the resettlement of 1.3 million people?",
// 		correctAnswer: "Three Gorges Dam",
// 		wrongAnswers: ["Aswan High Dam", "Hoover Dam", "La Rance Tidal Station"],
// 	},
// 	{
// 		question:
// 			"The restriction of water flow to other countries downstream is listed as what type of impact associated with dams?",
// 		correctAnswer: "Political",
// 		wrongAnswers: ["Environmental", "Economic", "Safety"],
// 	},
// 	{
// 		question:
// 			"Which specific dam project is presented as an example of the political impact of restricting water flow to downstream countries, specifically regarding Egypt?",
// 		correctAnswer: "Ethiopia Renaissance Dam",
// 		wrongAnswers: [
// 			"Three Mile Island Reactor",
// 			"Vogtle Plant",
// 			"La Rance Station",
// 		],
// 	},
// 	{
// 		question:
// 			"What is the typical range for greenhouse gas emissions from hydropower per MWh?",
// 		correctAnswer: "10 – 13 kg/MWh",
// 		wrongAnswers: ["0 kg/MWh", "50 - 100 kg/MWh", "More than 500 kg/MWh"],
// 	},
// 	{
// 		question:
// 			"Tidal power is listed as a type of energy generation within which broader category?",
// 		correctAnswer: "Hydropower",
// 		wrongAnswers: ["Nuclear Energy", "Solar Energy", "Wind Energy"],
// 	},
// 	{
// 		question:
// 			"The La Rance station in France is identified as the first example of what specific type of hydropower generation?",
// 		correctAnswer: "Tidal Power",
// 		wrongAnswers: [
// 			"Run-of-river hydropower",
// 			"Pumped-storage hydropower",
// 			"Small hydropower",
// 		],
// 	},
// 	{
// 		question:
// 			"How much electricity does hydropower generate annually in Egypt?",
// 		correctAnswer: "10 Billion kWh",
// 		wrongAnswers: ["149 Billion kWh", "210 TWh", "6.7 Billion kWh"],
// 	},
// 	// Wind
// 	{
// 		question:
// 			"According to the lecture outline, which of the following is NOT a topic covered in the Introduction to Wind Energy lecture?",
// 		correctAnswer: "Types of Nuclear Energy",
// 		wrongAnswers: [
// 			"History of Wind Energy",
// 			"Amount of Energy we Can Get",
// 			"Impact on the Environment",
// 		],
// 	},
// 	{
// 		question:
// 			"According to the source, what is the estimated annual global potential for onshore and offshore wind generation at 90m turbine hub heights?",
// 		correctAnswer: "872,000 TWh",
// 		wrongAnswers: ["26,573 TWh", "555 TWh", "1,890 TWh"],
// 	},
// 	{
// 		question:
// 			"What was the total global electricity use in 2022, according to the source provided in the lecture?",
// 		correctAnswer: "26,573 TWh",
// 		wrongAnswers: ["872,000 TWh", "170 TWh", "210 TWh"],
// 	},
// 	{
// 		question:
// 			"The lecture notes pose a question regarding the significant potential of wind energy compared to actual production. What is the essence of this question?",
// 		correctAnswer:
// 			"Why does wind energy not produce the numbers mentioned (referring to the potential)?",
// 		wrongAnswers: [
// 			"How much energy can we get from wind annually?",
// 			"What is the total wind energy capacity in Egypt?",
// 			"What is the cost of wind energy?",
// 		],
// 	},
// 	{
// 		question:
// 			"According to the graph shown for Wind Energy in Egypt, what was the total wind energy capacity in 2012?",
// 		correctAnswer: "555 MW",
// 		wrongAnswers: ["755 MW", "1,130 MW", "1,890 MW"],
// 	},
// 	{
// 		question:
// 			"Based on the graph presented in the lecture, what was the total wind energy capacity in Egypt in 2023?",
// 		correctAnswer: "1,890 MW",
// 		wrongAnswers: ["555 MW", "1,643 MW", "1,132 MW"],
// 	},
// 	{
// 		question:
// 			"Looking at the trend shown in the graph for Wind Energy in Egypt from 2012 to 2023, what generally happened to the total wind energy capacity?",
// 		correctAnswer: "It showed a consistent increase.",
// 		wrongAnswers: [
// 			"It remained relatively constant.",
// 			"It decreased significantly.",
// 			"It fluctuated wildly with no clear trend.",
// 		],
// 	},
// 	{
// 		question:
// 			"Which year marked the highest total wind energy capacity shown on the graph for Wind Energy in Egypt between 2012 and 2023?",
// 		correctAnswer: "2023",
// 		wrongAnswers: ["2012", "2016", "2021"],
// 	},
// 	// Solar
// 	{
// 		question:
// 			"Based on the lecture outline for Introduction to Solar Energy, which topic is NOT listed as being covered?",
// 		correctAnswer: "Sources of Nuclear Energy",
// 		wrongAnswers: [
// 			"History of Solar Energy",
// 			"Life Cycle of Solar Panel",
// 			"Solar Power Emissions",
// 		],
// 	},
// 	{
// 		question:
// 			"Except for nuclear, tidal, and geothermal energy, how are all other major sources of electricity described as being connected?",
// 		correctAnswer: "Directly or indirectly linked to the sun",
// 		wrongAnswers: [
// 			"Derived from the Earth's core",
// 			"Dependent on the gravitational pull of the moon",
// 			"Created through chemical reactions underground",
// 		],
// 	},
// 	{
// 		question:
// 			"Around the 7th Century BC, what was the earliest recorded use related to harnessing sunlight?",
// 		correctAnswer: "First Use of Magnifying Glass",
// 		wrongAnswers: [
// 			"Used mirrors to concentrate sunlight for torches",
// 			"Developed hot boxes to measure heating effects",
// 			"Built the world's first solar power plant",
// 		],
// 	},
// 	{
// 		question:
// 			"The discovery that selenium produces electricity when exposed to sunlight without moving parts was made by Adams and Evans in what year?",
// 		correctAnswer: "1876",
// 		wrongAnswers: ["1839", "1873", "1891"],
// 	},
// 	{
// 		question:
// 			"What notable solar energy development occurred in Cairo, Egypt in 1912?",
// 		correctAnswer: "The world's first successful solar-power plant was built",
// 		wrongAnswers: [
// 			"The first commercial solar water heater was patented",
// 			"Giant mirrors were used to burn invading ships",
// 			"The photovoltaic effect was discovered",
// 		],
// 	},
// 	{
// 		question:
// 			"When considering the anatomy of the sun, which layer is described as the innermost layer we can observe directly and where most of the sun's energy is emitted?",
// 		correctAnswer: "The Photosphere",
// 		wrongAnswers: ["The Core", "The Radiative Zone", "The Corona"],
// 	},
// 	{
// 		question:
// 			"What is the average value of solar radiation reaching the Earth's surface, measured in Watts per square meter (W/m²)?",
// 		correctAnswer: "170 W/m²",
// 		wrongAnswers: ["1361 W/m²", "300 W/m²", "230,000,000 W/m²"],
// 	},
// 	{
// 		question:
// 			"According to the lecture's breakdown of solar radiation reaching Earth, which type of radiation makes up the largest percentage?",
// 		correctAnswer: "Infrared Radiation (47%)",
// 		wrongAnswers: [
// 			"Ultraviolet Radiation (3%)",
// 			"Visible Light (50%)",
// 			"Massless Neutrinos",
// 		],
// 	},
// 	{
// 		question:
// 			"Which solar thermal power generation method uses flat or almost flat mirrors mounted at ground level and is described as lower cost compared to parabolic troughs?",
// 		correctAnswer: "Fresnel Reflector",
// 		wrongAnswers: ["Parabolic Trough", "Solar Tower", "Solar Dishes"],
// 	},
// 	{
// 		question:
// 			"What range is given for the typical operating life of a solar panel?",
// 		correctAnswer: "20-30 Years",
// 		wrongAnswers: ["5-10 Years", "50-60 Years", "10-15 Years"],
// 	},
// 	{
// 		question:
// 			"A disadvantage of solar power mentioned is the amount of water needed for steam generation. Approximately how much freshwater is used per MWh?",
// 		correctAnswer: "800 gallons",
// 		wrongAnswers: ["80 gallons", "8,000 gallons", "8 million gallons"],
// 	},
// 	{
// 		question:
// 			"By 2030, approximately how many tons of disposed solar panels are projected, highlighting a waste management challenge?",
// 		correctAnswer: "8 million tones",
// 		wrongAnswers: [
// 			"8 thousand tones",
// 			"80 thousand tones",
// 			"800 thousand tones",
// 		],
// 	},
// 	{
// 		question:
// 			"Compared to other energy sources like Fossil Fuels (2500 W/m²) or Nuclear (700 W/m²), what is the approximate energy production density for Solar Energy listed in the lecture materials?",
// 		correctAnswer: "30 W/m²",
// 		wrongAnswers: ["1.5 W/m²", "700 W/m²", "2500 W/m²"],
// 	},
// 	// Hydrocrabons GHG
// 	{
// 		question:
// 			"Which of the following is explicitly listed as a greenhouse gas in the lecture material?",
// 		correctAnswer: "Sulphur Hexafluoride",
// 		wrongAnswers: ["Ozone", "Sulfur Dioxide", "Carbon Monoxide"],
// 	},
// 	{
// 		question:
// 			"The lecture material identifies several greenhouse gases. Which of these is listed as a hydrogen-containing gas?",
// 		correctAnswer: "Methane",
// 		wrongAnswers: ["Carbon Dioxide", "Nitrogen Oxides", "Perfluorocarbons"],
// 	},
// 	{
// 		question:
// 			"When discussing global warming, how old is our planet stated to be?",
// 		correctAnswer: "Approximately 4.5 Billion Years Old",
// 		wrongAnswers: [
// 			"Approximately 6,000 Years Old",
// 			"Approximately 1 million Years Old",
// 			"Approximately 1 trillion Years Old",
// 		],
// 	},
// 	{
// 		question:
// 			"In the discussion on Egypt's emissions, what was the estimated total global CO2 equivalent emissions in Mton?",
// 		correctAnswer: "52962.9",
// 		wrongAnswers: ["335.97", "0.65", "529.629"],
// 	},
// 	{
// 		question:
// 			"What percentage of the total global CO2 equivalent emissions did Egypt's emissions represent, according to the lecture material?",
// 		correctAnswer: "Less than 0.65%",
// 		wrongAnswers: ["More than 5%", "Exactly 0.65%", "Between 1% and 2%"],
// 	},
// 	{
// 		question:
// 			"For the greenhouse gas assignment experiment, how many 2-liter bottles are needed?",
// 		correctAnswer: "Two",
// 		wrongAnswers: ["One", "Three", "Four"],
// 	},
// 	{
// 		question:
// 			"In the greenhouse gas assignment experiment using 2-liter bottles, why is the shorter bottle used?",
// 		correctAnswer: "As a control because it will not trap air as well",
// 		wrongAnswers: [
// 			"To collect water vapor",
// 			"To measure the temperature difference",
// 			"To simulate a different atmosphere",
// 		],
// 	},
// 	{
// 		question:
// 			"If the weather is cloudy, what alternative is suggested for providing heat for the greenhouse gas assignment experiment?",
// 		correctAnswer: "A 100+ watt bulb in a clip-on lamp",
// 		wrongAnswers: ["An oven", "A hairdryer", "Direct sunlight"],
// 	},
// 	{
// 		question:
// 			"How long should the 2-liter bottles sit in direct sunlight (or under the alternative heat source) for the greenhouse gas assignment experiment?",
// 		correctAnswer: "30 to 50 minutes",
// 		wrongAnswers: ["5 to 10 minutes", "1 to 2 hours", "50 to 60 minutes"],
// 	},
// 	{
// 		question:
// 			"What is one of the deliverables required for the greenhouse gas assignment, related to documenting the experiment?",
// 		correctAnswer: "Record a short three to five minute video",
// 		wrongAnswers: [
// 			"Write a long essay explaining the results",
// 			"Take a series of photographs",
// 			"Build a physical model of the experiment",
// 		],
// 	},
// 	{
// 		question:
// 			"In addition to a video, what written component is required for the greenhouse gas assignment?",
// 		correctAnswer: "Write a 500 word reflection on your observation",
// 		wrongAnswers: [
// 			"Write a 1000 word research paper",
// 			"Summarize the experiment steps in bullet points",
// 			"Create a presentation slides",
// 		],
// 	},
// 	// Hydrocarbons Energy
// 	{
// 		question:
// 			"How is the concept of 'Energy' primarily defined within the lecture materials?",
// 		correctAnswer: "The ability to do work",
// 		wrongAnswers: [
// 			"The flow of heat",
// 			"The capacity to generate electricity",
// 			"The rate at which work is done",
// 		],
// 	},
// 	{
// 		question:
// 			"Based on the outline presented for the lecture on Hydrocarbons As An Energy Source, which topic is listed?",
// 		correctAnswer: "Why Are Hydrocarbons So Popular",
// 		wrongAnswers: [
// 			"Major Nuclear Incidents",
// 			"Impact on Biodiversity",
// 			"The Sun's Anatomy",
// 		],
// 	},
// 	{
// 		question:
// 			"To compare the energy production capability per unit area of different energy types, what specific unit is used in the lecture?",
// 		correctAnswer: "Watts per square meter (W/m²)",
// 		wrongAnswers: [
// 			"Kilowatt-hours (kWh)",
// 			"Joules per second (J/s)",
// 			"MegaJoules per kilogram (MJ/kg)",
// 		],
// 	},
// 	{
// 		question:
// 			"What is the approximate energy production density figure provided for Fossil Fuels, measured in W/m²?",
// 		correctAnswer: "2500 W/m²",
// 		wrongAnswers: ["1.5 W/m²", "30 W/m²", "700 W/m²"],
// 	},
// 	{
// 		question:
// 			"The energy production density for Wind power is presented with what value in W/m²?",
// 		correctAnswer: "1.5 W/m²",
// 		wrongAnswers: ["2500 W/m²", "30 W/m²", "700 W/m²"],
// 	},
// 	{
// 		question:
// 			"What W/m² number is listed as the energy production density for Solar energy?",
// 		correctAnswer: "30 W/m²",
// 		wrongAnswers: ["2500 W/m²", "1.5 W/m²", "700 W/m²"],
// 	},
// 	{
// 		question:
// 			"How many Watts per square meter are given as the energy production density for Nuclear power?",
// 		correctAnswer: "700 W/m²",
// 		wrongAnswers: ["2500 W/m²", "1.5 W/m²", "30 W/m²"],
// 	},
// 	{
// 		question:
// 			"Comparing the listed energy production densities (W/m²), which energy type has the highest value?",
// 		correctAnswer: "Fossil Fuels",
// 		wrongAnswers: ["Wind", "Solar", "Nuclear"],
// 	},
// 	{
// 		question:
// 			"Based on the provided W/m² figures, which energy type shows the smallest energy production density?",
// 		correctAnswer: "Wind",
// 		wrongAnswers: ["Fossil Fuels", "Solar", "Nuclear"],
// 	},
// 	{
// 		question:
// 			"What approximate value is mentioned for the estimated Global Power Demand, in Trillion Watts?",
// 		correctAnswer: "3 Trillion Watts",
// 		wrongAnswers: [
// 			"1.5 Trillion Watts",
// 			"30 Trillion Watts",
// 			"700 Trillion Watts",
// 		],
// 	},
// 	{
// 		question:
// 			"If the efficiency of an energy system were reduced by half, as discussed in the lecture, how would this impact the energy production density (W/m²) value?",
// 		correctAnswer: "The number would be divided by 2",
// 		wrongAnswers: [
// 			"The number would double",
// 			"The number would remain the same",
// 			"The number would be multiplied by 10",
// 		],
// 	},
// 	// Hydrocarbons History
// 	{
// 		question:
// 			"The lecture introduces three common types of hydrocarbons. Which of the following is included?",
// 		correctAnswer: "Coal",
// 		wrongAnswers: ["Ethanol", "Natural Gas Liquids", "Shale Oil"],
// 	},
// 	{
// 		question:
// 			"In ancient Mesopotamia, specifically in Hit, what substance derived from hydrocarbons was employed as mortar, waterproofing, and adhesive approximately 6000 years ago?",
// 		correctAnswer: "Asphalt",
// 		wrongAnswers: ["Tar", "Bitumen", "Pitch"],
// 	},
// 	{
// 		question:
// 			"Around 4000 B.C., the Babylonians utilized bitumen for what purpose related to water transport?",
// 		correctAnswer: "Caulking ships",
// 		wrongAnswers: ["Fueling lamps", "Sealing pottery", "Building docks"],
// 	},
// 	{
// 		question:
// 			"How did the ancient Egyptians incorporate asphalt and bitumen into their practices around 3000 B.C.?",
// 		correctAnswer: "As embalming material and in pyramid construction",
// 		wrongAnswers: ["For cooking food", "To heat their homes", "As currency"],
// 	},
// 	{
// 		question:
// 			"During the 4th Century, Romans are noted for using asphalt in what significant infrastructure project?",
// 		correctAnswer: "Road and pavement construction",
// 		wrongAnswers: [
// 			"Aqueduct building",
// 			"Temple foundations",
// 			"Public bath heating",
// 		],
// 	},
// 	{
// 		question:
// 			"What medicinal belief about oil was held by the Persians around the 10th Century?",
// 		correctAnswer: "It had medicinal benefits",
// 		wrongAnswers: [
// 			"It brought bad luck",
// 			"It could purify water",
// 			"It caused illness",
// 		],
// 	},
// 	{
// 		question:
// 			"American Indian tribes in the 16th Century used oil and asphalt for several applications. Which of these was a listed use?",
// 		correctAnswer: "Lamps, waterproofing, and medicine for cough and cold",
// 		wrongAnswers: ["Weapon making", "Crop irrigation", "Building shelters"],
// 	},
// 	{
// 		question:
// 			"The Seneca Tribe in New York in the early 1800s traded 'Seneca Oil'. What was its approximate value per liter compared to a worker's daily wage?",
// 		correctAnswer: "$20 USD per liter when a daily wage was a few pennies",
// 		wrongAnswers: [
// 			"Equivalent to a daily wage",
// 			"Less than a penny per liter",
// 			"Hundreds of dollars per liter",
// 		],
// 	},
// 	{
// 		question:
// 			"When did the first recorded drilled well for oil production occur, marking a significant step towards hydrocarbon industrialization?",
// 		correctAnswer:
// 			"It was drilled by Edwin Drake in the US after failed attempts to dig a mine shaft",
// 		wrongAnswers: [
// 			"In ancient China",
// 			"In the Middle East during the 10th century",
// 			"In Egypt for building pyramids",
// 		],
// 	},
// 	{
// 		question:
// 			"The lecture discusses how hydrocarbons influenced modern economies. What role is highlighted?",
// 		correctAnswer:
// 			"Driving the Industrial Revolution and increasing country productivity",
// 		wrongAnswers: [
// 			"Promoting global peace",
// 			"Decreasing the need for international trade",
// 			"Reducing the importance of political decisions",
// 		],
// 	},
// 	{
// 		question:
// 			"Which of the following conflicts is specifically mentioned as a war fought over oil?",
// 		correctAnswer: "The Gulf War [1990 – 1991]",
// 		wrongAnswers: [
// 			"The Hundred Years' War",
// 			"The Napoleonic Wars",
// 			"The Crimean War",
// 		],
// 	},
// ];

const questions = [
	// Chapter 7
	{
		question:
			"What is defined as splitting a market into smaller groups of buyers with distinct needs, characteristics, or behaviors who might require separate marketing strategies or mixes?",
		correctAnswer: "Market segmentation",
		wrongAnswers: ["Market targeting", "Differentiation", "Positioning"],
	},
	{
		question:
			"Which type of market segmentation divides the market into different geographical units such as nations, regions, states, counties, cities, or even neighborhoods?",
		correctAnswer: "Geographic segmentation",
		wrongAnswers: [
			"Demographic segmentation",
			"Psychographic segmentation",
			"Behavioral segmentation",
		],
	},
	{
		question:
			"Which type of market segmentation divides the market into groups based on variables such as age, gender, family size, family life cycle, income, occupation, education, religion, race, generation, and nationality?",
		correctAnswer: "Demographic segmentation",
		wrongAnswers: [
			"Geographic segmentation",
			"Psychographic segmentation",
			"Behavioral segmentation",
		],
	},
	{
		question:
			"Which type of demographic segmentation divides the market into different age and life-cycle groups?",
		correctAnswer: "Age and life-cycle segmentation",
		wrongAnswers: [
			"Gender segmentation",
			"Income segmentation",
			"Occasion segmentation",
		],
	},
	{
		question:
			"Which type of demographic segmentation divides a market into different groups based on gender?",
		correctAnswer: "Gender segmentation",
		wrongAnswers: [
			"Age and life-cycle segmentation",
			"Income segmentation",
			"Benefit segmentation",
		],
	},
	{
		question:
			"Which type of market segmentation divides buyers into different groups based on lifestyle or personality characteristics?",
		correctAnswer: "Psychographic segmentation",
		wrongAnswers: [
			"Geographic segmentation",
			"Demographic segmentation",
			"Behavioral segmentation",
		],
	},
	{
		question:
			"Which type of market segmentation divides buyers into groups based on their knowledge, attitudes, uses, or responses concerning a product?",
		correctAnswer: "Behavioral segmentation",
		wrongAnswers: [
			"Geographic segmentation",
			"Demographic segmentation",
			"Psychographic segmentation",
		],
	},
	{
		question:
			"Which type of behavioral segmentation divides buyers according to occasions when they get the idea to buy, actually make their purchase, or use the purchased item?",
		correctAnswer: "Occasion segmentation",
		wrongAnswers: ["Benefit segmentation", "User status", "Usage rate"],
	},
	{
		question:
			"Which type of behavioral segmentation divides buyers according to the different benefits that consumers seek from the product?",
		correctAnswer: "Benefit segmentation",
		wrongAnswers: ["Occasion segmentation", "User status", "Loyalty status"],
	},
	{
		question:
			"Which type of behavioral segmentation divides markets into groups of light, medium, and heavy product users?",
		correctAnswer: "Usage rate",
		wrongAnswers: ["User status", "Loyalty status", "Benefit segmentation"],
	},
	{
		question:
			"Which type of segmentation involves forming segments of consumers who have similar needs and buying behaviors even though they are located in different countries?",
		correctAnswer: "Intermarket (cross-market) segmentation",
		wrongAnswers: [
			"Geographic segmentation",
			"Demographic segmentation",
			"Psychographic segmentation",
		],
	},
	{
		question:
			"According to the sources, which of the following is *not* listed as a requirement for effective market segmentation?",
		correctAnswer: "Adaptable", // Based on the five requirements mentioned in DQ 7-4 [4] (Measurable, Accessible, Substantial, Differentiable, Actionable)
		wrongAnswers: ["Measurable", "Accessible", "Substantial"],
	},
	{
		question:
			"What process involves evaluating each market segment's attractiveness and selecting one or more segments to enter?",
		correctAnswer: "Market targeting (targeting)",
		wrongAnswers: ["Market segmentation", "Differentiation", "Positioning"],
	},
	{
		question:
			"Which market targeting strategy involves a firm deciding to ignore market segment differences and go after the whole market with one offer?",
		correctAnswer: "Undifferentiated (mass) marketing",
		wrongAnswers: [
			"Differentiated (segmented) marketing",
			"Concentrated (niche) marketing",
			"Micromarketing",
		],
	},
	{
		question:
			"Which market targeting strategy involves a firm deciding to target several market segments and designs separate offers for each?",
		correctAnswer: "Differentiated (segmented) marketing",
		wrongAnswers: [
			"Undifferentiated (mass) marketing",
			"Concentrated (niche) marketing",
			"Micromarketing",
		],
	},
	{
		question:
			"Which market targeting strategy involves a firm going after a large share of one or a few segments or niches?",
		correctAnswer: "Concentrated (niche) marketing",
		wrongAnswers: [
			"Undifferentiated (mass) marketing",
			"Differentiated (segmented) marketing",
			"Micromarketing",
		],
	},
	{
		question:
			"Which market targeting strategy involves tailoring products and marketing programs to the needs and wants of specific individuals and local customer segments?",
		correctAnswer: "Micromarketing (local or individual marketing)",
		wrongAnswers: [
			"Undifferentiated (mass) marketing",
			"Differentiated (segmented) marketing",
			"Concentrated (niche) marketing",
		],
	},
	{
		question:
			"What is the process of differentiating the market offering to create superior customer value?",
		correctAnswer: "Differentiation",
		wrongAnswers: ["Market segmentation", "Market targeting", "Positioning"],
	},
	{
		question:
			"What is the process of arranging for a market offering to occupy a clear, distinctive, and desirable place relative to competing products in the minds of target consumers?",
		correctAnswer: "Positioning",
		wrongAnswers: [
			"Market segmentation",
			"Market targeting",
			"Differentiation",
		],
	},
	{
		question:
			"According to the sources, what is the way a product is defined by consumers on important attributes—the place the product occupies in consumers' minds relative to competing products?",
		correctAnswer: "Product position",
		wrongAnswers: [
			"Value proposition",
			"Competitive advantage",
			"Market segment",
		],
	},
	{
		question:
			"What concept is described as an advantage over competitors gained by offering greater customer value, either by having lower prices or providing more benefits that justify higher prices?",
		correctAnswer: "Competitive advantage",
		wrongAnswers: [
			"Value proposition",
			"Market position",
			"Product differentiation",
		],
	},
	{
		question:
			"What is the term used to describe the set of benefits or values a company promises to deliver to consumers to satisfy their needs?",
		correctAnswer: "Value proposition",
		wrongAnswers: [
			"Product position",
			"Competitive advantage",
			"Marketing mix",
		],
	},
	// Chapter 8
	{
		question:
			"What is defined as anything that can be offered to a market for attention, acquisition, use, or consumption that might satisfy a want or need?",
		correctAnswer: "Product",
		wrongAnswers: ["Service", "Brand", "Market Offering"],
	},
	{
		question:
			"Which category of products is bought by final consumers for personal consumption?",
		correctAnswer: "Consumer product",
		wrongAnswers: [
			"Industrial product",
			"Specialty product",
			"Unsought product",
		],
	},
	{
		question:
			"Services are characterized by four key aspects. Which characteristic means that services cannot be seen, tasted, felt, heard, or smelled before they are bought?",
		correctAnswer: "Service intangibility",
		wrongAnswers: [
			"Service inseparability",
			"Service variability",
			"Service perishability",
		],
	},
	{
		question:
			"What is the name, term, sign, symbol, design, or a combination of these, that identifies the products or services of one seller or group of sellers and differentiates them from those of competitors?",
		correctAnswer: "Brand",
		wrongAnswers: ["Product", "Packaging", "Labeling"],
	},
	{
		question:
			"What is defined as the differential effect that knowing the brand name has on customer response to the product or its marketing?",
		correctAnswer: "Brand equity",
		wrongAnswers: ["Brand value", "Brand positioning", "Brand management"],
	},
	{
		question:
			"Adding more items within the present range of the product line is known as what?",
		correctAnswer: "Line extension",
		wrongAnswers: [
			"Brand extension",
			"Product mix widening",
			"Product mix length",
		],
	},
	{
		question:
			"Which concept refers to the way a product is defined by consumers on important attributes—the place it occupies in consumers’ minds relative to competing products?",
		correctAnswer: "Product position",
		wrongAnswers: [
			"Product differentiation",
			"Brand image",
			"Value proposition",
		],
	},
	{
		question:
			"In the context of individual product decisions, what involves designing and producing the container or wrapper for a product?",
		correctAnswer: "Packaging",
		wrongAnswers: ["Labeling", "Branding", "Product design"],
	},
	{
		question:
			"Which type of consumer product has unique characteristics or brand identification for which a significant group of buyers is willing to make a special purchase effort?",
		correctAnswer: "Specialty product",
		wrongAnswers: [
			"Convenience product",
			"Shopping product",
			"Unsought product",
		],
	},
	// Chapter 9
	{
		question: "What is the first step in the new product development process?",
		correctAnswer: "Idea generation",
		wrongAnswers: ["Idea screening", "Concept testing", "Business analysis"],
	},
	{
		question:
			"Which stage of the new product development process involves reducing the number of new product ideas based on the company's own criteria?",
		correctAnswer: "Idea screening",
		wrongAnswers: [
			"Idea generation",
			"Concept development",
			"Commercialization",
		],
	},
	{
		question:
			"Testing new product concepts with groups of target consumers to find out if the concepts have strong consumer appeal is known as what?",
		correctAnswer: "Concept testing",
		wrongAnswers: [
			"Idea screening",
			"Marketing strategy development",
			"Test marketing",
		],
	},
	{
		question:
			"A review of the sales, costs, and profit projections for a new product to determine if it is likely to satisfy the company’s objectives is conducted during which stage of new product development?",
		correctAnswer: "Business analysis",
		wrongAnswers: [
			"Concept development",
			"Marketing strategy development",
			"Commercialization",
		],
	},
	{
		question:
			"Which final stage of the new product development process involves introducing the new product into the market?",
		correctAnswer: "Commercialization",
		wrongAnswers: [
			"Test marketing",
			"Product development",
			"Business analysis",
		],
	},
	{
		question:
			"What is the name for an approach to new product development in which various company departments work closely together, overlapping the steps in the product development process to save time and increase effectiveness?",
		correctAnswer: "Team-based new product development",
		wrongAnswers: [
			"Customer-centered new product development",
			"Systematic new product development",
			"Phased new product development",
		],
	},
	{
		question:
			"What concept describes the course of a product's sales and profits over its lifetime?",
		correctAnswer: "Product life cycle (PLC)",
		wrongAnswers: [
			"Product development process",
			"Product mix",
			"Branding strategy",
		],
	},
	{
		question: "The typical product life cycle consists of how many stages?",
		correctAnswer: "Five",
		wrongAnswers: ["Three", "Four", "Six"],
	},
	{
		question:
			"Which stage of the product life cycle is characterized by slow sales growth as the product is introduced in the market, and profits are nonexistent because of the heavy expenses of product introduction?",
		correctAnswer: "Introduction stage",
		wrongAnswers: [
			"Growth stage",
			"Product development stage",
			"Decline stage",
		],
	},
	{
		question:
			"Which stage of the product life cycle is a period of rapid market acceptance and increasing profits?",
		correctAnswer: "Growth stage",
		wrongAnswers: ["Introduction stage", "Maturity stage", "Decline stage"],
	},
	{
		question:
			"Which stage of the product life cycle is characterized by a slowdown in sales growth because the product has achieved acceptance by most potential buyers, and profits level off or decline because of increased marketing outlays to defend the product against competition?",
		correctAnswer: "Maturity stage",
		wrongAnswers: ["Growth stage", "Introduction stage", "Decline stage"],
	},
	{
		question:
			"Which stage of the product life cycle is the period when a product’s sales fade or fall to zero?",
		correctAnswer: "Decline stage",
		wrongAnswers: ["Maturity stage", "Growth stage", "Introduction stage"],
	},
	{
		question:
			"What term describes a temporary period of unusually high sales driven by consumer enthusiasm and immediate popularity?",
		correctAnswer: "Fad",
		wrongAnswers: ["Style", "Fashion", "Trend"],
	},
	// Chapter 10
	{
		question:
			"What is defined as the amount of money charged for a product or service, or the sum of the values that consumers exchange for the benefits of having or using the product or service?",
		correctAnswer: "Price",
		wrongAnswers: ["Cost", "Value", "Revenue"],
	},
	{
		question:
			"Which major pricing strategy involves setting prices based on buyers' perceptions of value rather than on the seller's cost?",
		correctAnswer: "Customer value–based pricing",
		wrongAnswers: [
			"Cost-based pricing",
			"Competition-based pricing",
			"Dynamic pricing",
		],
	},
	{
		question:
			"Which type of value-based pricing offers the right combination of quality and good service at a fair price?",
		correctAnswer: "Good-value pricing",
		wrongAnswers: [
			"Value-added pricing",
			"Cost-plus pricing",
			"Break-even pricing",
		],
	},
	{
		question:
			"Which major pricing strategy involves setting prices based on the costs for producing, distributing, and selling the product plus a fair rate of return for effort and risk?",
		correctAnswer: "Cost-based pricing",
		wrongAnswers: [
			"Customer value–based pricing",
			"Competition-based pricing",
			"Skimming pricing",
		],
	},
	{
		question:
			"Costs that do not vary with production or sales level are known as what?",
		correctAnswer: "Fixed costs",
		wrongAnswers: ["Variable costs", "Total costs", "Operating costs"],
	},
	{
		question:
			"The accumulated production experience that causes average cost per unit to fall as total accumulated production experience increases is known as what?",
		correctAnswer: "Experience curve (learning curve)",
		wrongAnswers: ["Demand curve", "Break-even point", "Cost-plus pricing"],
	},
	{
		question:
			"Which major pricing strategy involves setting prices based on competitors' strategies, costs, prices, and market offerings?",
		correctAnswer: "Competition-based pricing",
		wrongAnswers: [
			"Customer value–based pricing",
			"Cost-based pricing",
			"Value-added pricing",
		],
	},
	{
		question:
			"What shows the number of units the market will buy in a given time period at different prices that might be charged?",
		correctAnswer: "Demand curve",
		wrongAnswers: ["Supply curve", "Experience curve", "Break-even point"],
	},
	{
		question:
			"A measure of the sensitivity of demand to changes in price is called what?",
		correctAnswer: "Price elasticity",
		wrongAnswers: [
			"Price sensitivity",
			"Value elasticity",
			"Demand volatility",
		],
	},
	{
		question:
			"What is the pricing approach that starts with an ideal selling price based on customer value considerations and then targets costs that will ensure that the price is met?",
		correctAnswer: "Target costing",
		wrongAnswers: [
			"Cost-plus pricing",
			"Value-based pricing",
			"Competition-based pricing",
		],
	},
	// Chapter 11
	{
		question:
			"Which new-product pricing strategy involves setting a high price for a new product to skim maximum revenues layer by layer from the segments willing to pay the high price?",
		correctAnswer: "Market-skimming pricing (price skimming)",
		wrongAnswers: [
			"Market-penetration pricing",
			"Product line pricing",
			"Value-added pricing",
		],
	},
	{
		question:
			"Which new-product pricing strategy involves setting a low price for a new product in order to attract a large number of buyers and a large market share?",
		correctAnswer: "Market-penetration pricing",
		wrongAnswers: [
			"Market-skimming pricing",
			"Cost-plus pricing",
			"Segmented pricing",
		],
	},
	{
		question:
			"Setting the price steps between various products in a product line based on cost differences between the products, customer evaluations of different features, and competitors' prices is known as what?",
		correctAnswer: "Product line pricing",
		wrongAnswers: [
			"Captive-product pricing",
			"Optional-product pricing",
			"Product bundle pricing",
		],
	},
	{
		question:
			"What pricing strategy involves pricing optional or accessory products along with a main product?",
		correctAnswer: "Optional-product pricing",
		wrongAnswers: [
			"Captive-product pricing",
			"Product line pricing",
			"Product bundle pricing",
		],
	},
	{
		question:
			"What pricing strategy involves setting a price for products that must be used along with a main product, such as blades for a razor and games for a video game console?",
		correctAnswer: "Captive-product pricing",
		wrongAnswers: [
			"Optional-product pricing",
			"By-product pricing",
			"Product line pricing",
		],
	},
	{
		question:
			"What pricing strategy involves setting a low price for by-products to make the main product’s price more competitive?",
		correctAnswer: "By-product pricing",
		wrongAnswers: [
			"Captive-product pricing",
			"Product bundle pricing",
			"Cost-based pricing",
		],
	},
	{
		question:
			"Combining several products and offering the bundle at a reduced price is called what?",
		correctAnswer: "Product bundle pricing",
		wrongAnswers: [
			"Product line pricing",
			"Optional-product pricing",
			"Captive-product pricing",
		],
	},
	{
		question:
			"A straight reduction in price on purchases made during a stated period of time or of larger quantities is known as what?",
		correctAnswer: "Discount",
		wrongAnswers: ["Allowance", "Segmented pricing", "Promotional pricing"],
	},
	{
		question:
			"Promotional money paid by manufacturers to retailers in return for an agreement to feature the manufacturer’s products in some way is called what?",
		correctAnswer: "Allowance",
		wrongAnswers: ["Discount", "Segmented pricing", "Geographical pricing"],
	},
	{
		question:
			"Selling a product or service at two or more prices, where the difference in prices is not based on differences in costs, is an example of what pricing strategy?",
		correctAnswer: "Segmented pricing",
		wrongAnswers: [
			"Dynamic pricing",
			"Psychological pricing",
			"Promotional pricing",
		],
	},
	{
		question:
			"Pricing that considers the psychology of prices and not simply the economics, where the price is used to say something about the product, is known as what?",
		correctAnswer: "Psychological pricing",
		wrongAnswers: [
			"Reference prices",
			"Promotional pricing",
			"Dynamic pricing",
		],
	},
	{
		question:
			"Temporarily pricing products below the list price, and sometimes even below cost, to increase short-run sales is characteristic of what pricing strategy?",
		correctAnswer: "Promotional pricing",
		wrongAnswers: [
			"Psychological pricing",
			"Segmented pricing",
			"Geographical pricing",
		],
	},
	{
		question:
			"What pricing strategy involves a company setting prices differently for customers located in different parts of the country or world?",
		correctAnswer: "Geographical pricing",
		wrongAnswers: [
			"Segmented pricing",
			"International pricing",
			"Dynamic pricing",
		],
	},
	{
		question:
			"Adjusting prices continually to meet the characteristics and needs of individual customers and situations is known as what?",
		correctAnswer: "Dynamic pricing",
		wrongAnswers: [
			"Segmented pricing",
			"Geographical pricing",
			"Psychological pricing",
		],
	},
	// Chapter 12
	{
		question:
			"What is defined as the network made up of a company, its suppliers, its distributors, and, ultimately, customers who partner with each other to improve the performance of the entire system?",
		correctAnswer: "Value delivery network",
		wrongAnswers: ["Marketing channel", "Supply chain", "Distribution system"],
	},
	{
		question:
			"A set of interdependent organizations that help make a product or service available for use or consumption by the consumer or business user is known as what?",
		correctAnswer: "Marketing channel (distribution channel)",
		wrongAnswers: [
			"Value delivery network",
			"Supply chain",
			"Marketing logistics",
		],
	},
	{
		question:
			"What refers to a layer of intermediaries that performs some work in bringing the product and its ownership closer to the final buyer?",
		correctAnswer: "Channel level",
		wrongAnswers: [
			"Channel conflict",
			"Distribution intensity",
			"Logistics function",
		],
	},
	{
		question:
			"A marketing channel that has no intermediary levels is called what?",
		correctAnswer: "Direct marketing channel",
		wrongAnswers: [
			"Indirect marketing channel",
			"Vertical marketing system",
			"Horizontal marketing system",
		],
	},
	{
		question:
			"What occurs when channel firms disagree on goals, roles, and rewards—who should do what for which rewards?",
		correctAnswer: "Channel conflict",
		wrongAnswers: ["Disintermediation", "Channel design", "Channel management"],
	},
	{
		question:
			"A distribution channel structure in which producers, wholesalers, and retailers act as a unified system is called what?",
		correctAnswer: "Vertical marketing system (VMS)",
		wrongAnswers: [
			"Conventional distribution channel",
			"Horizontal marketing system",
			"Multichannel distribution system",
		],
	},
	{
		question:
			"Which type of vertical marketing system integrates successive stages of production and distribution under single ownership?",
		correctAnswer: "Corporate VMS",
		wrongAnswers: [
			"Contractual VMS",
			"Administered VMS",
			"Franchise organization",
		],
	},
	{
		question:
			"Which type of vertical marketing system consists of independent firms at different levels of production and distribution who join together through contracts?",
		correctAnswer: "Contractual VMS",
		wrongAnswers: [
			"Corporate VMS",
			"Administered VMS",
			"Horizontal marketing system",
		],
	},
	{
		question:
			"Which type of vertical marketing system coordinates successive stages of production and distribution through the size and power of one of the parties?",
		correctAnswer: "Administered VMS",
		wrongAnswers: [
			"Corporate VMS",
			"Contractual VMS",
			"Multichannel distribution system",
		],
	},
	{
		question:
			"A channel arrangement in which two or more companies at one level join together to follow a new marketing opportunity is called what?",
		correctAnswer: "Horizontal marketing system",
		wrongAnswers: [
			"Vertical marketing system",
			"Multichannel distribution system",
			"Conventional distribution channel",
		],
	},
	{
		question:
			"What occurs when a product or service producer bypasses intermediaries and goes directly to final buyers, or when radically new types of channel intermediaries displace traditional ones?",
		correctAnswer: "Disintermediation",
		wrongAnswers: [
			"Channel conflict",
			"Channel integration",
			"Vertical marketing system",
		],
	},
	{
		question:
			"Designing effective marketing channels by analyzing customer needs, setting channel objectives, identifying major channel alternatives, and evaluating those alternatives is known as what?",
		correctAnswer: "Marketing channel design",
		wrongAnswers: [
			"Marketing channel management",
			"Integrated logistics management",
			"Supply chain management",
		],
	},
	{
		question:
			"Stocking the product in as many outlets as possible is a distribution strategy known as what?",
		correctAnswer: "Intensive distribution",
		wrongAnswers: [
			"Exclusive distribution",
			"Selective distribution",
			"Multichannel distribution",
		],
	},
	{
		question:
			"What calls for using the right number of channels and management to implement and control the channel design decisions?",
		correctAnswer: "Marketing channel management",
		wrongAnswers: [
			"Marketing channel design",
			"Integrated logistics management",
			"Supply chain management",
		],
	},
	{
		question:
			"Planning, implementing, and controlling the physical flow of materials, final goods, and related information from points of origin to points of consumption to meet customer requirements at a profit is known as what?",
		correctAnswer: "Marketing logistics (physical distribution)",
		wrongAnswers: [
			"Supply chain management",
			"Marketing channel management",
			"Value delivery network",
		],
	},
	{
		question:
			"Which concept involves managing upstream and downstream value-added flows of materials, final goods, and related information among suppliers, the company, resellers, and final consumers?",
		correctAnswer: "Supply chain management",
		wrongAnswers: [
			"Marketing logistics",
			"Channel management",
			"Integrated distribution",
		],
	},
	{
		question:
			"What refers to a large, highly automated warehouse designed to receive goods from various plants and suppliers, take orders, fill them efficiently, and deliver goods to customers as quickly as possible?",
		correctAnswer: "Distribution center",
		wrongAnswers: ["Warehouse", "Inventory hub", "Logistics point"],
	},
	{
		question:
			"Combining two or more modes of transportation, such as truck, rail, water, and air, to move goods is called what?",
		correctAnswer: "Multimodal transportation",
		wrongAnswers: [
			"Intermodal transportation",
			"Integrated logistics",
			"Physical distribution",
		],
	},
	{
		question:
			"Which concept emphasizes teamwork, both inside the company and among all the marketing channel organizations, to maximize the performance of the entire distribution system?",
		correctAnswer: "Integrated logistics management",
		wrongAnswers: [
			"Supply chain management",
			"Channel management",
			"Value delivery network",
		],
	},
	{
		question:
			"What is an independent logistics provider that performs any or all of the functions required to get a client's product to market?",
		correctAnswer: "Third-party logistics (3PL) provider",
		wrongAnswers: [
			"Channel intermediary",
			"Marketing channel member",
			"Distribution partner",
		],
	},
	// Chapter 13
	{
		question:
			"All the activities involved in selling goods or services directly to final consumers for their personal, nonbusiness use is defined as what?",
		correctAnswer: "Retailing",
		wrongAnswers: ["Wholesaling", "Marketing logistics", "Direct marketing"],
	},
	{
		question:
			"Retailers are classified by several characteristics, including the amount of service they offer, the breadth and depth of their product lines, the relative prices they charge, and which of the following?",
		correctAnswer: "How they are organized",
		wrongAnswers: [
			"Their geographical location",
			"Their promotional strategies",
			"Their target market size",
		],
	},
	{
		question:
			"Which type of retailer serves customers who are willing to perform their own locate-compare-select process to save time or money?",
		correctAnswer: "Self-service retailers",
		wrongAnswers: [
			"Limited-service retailers",
			"Full-service retailers",
			"Specialty stores",
		],
	},
	{
		question:
			"Which type of retailer carries a wide variety of product lines, typically clothing, home furnishings, and household goods—with each line operated as a separate department managed by specialist buyers or merchandisers?",
		correctAnswer: "Department stores",
		wrongAnswers: ["Specialty stores", "Supermarkets", "Convenience stores"],
	},
	{
		question:
			"Which type of store is much larger than a regular supermarket and offers a large assortment of routinely purchased food products, nonfood items, and services?",
		correctAnswer: "Superstore",
		wrongAnswers: ["Convenience store", "Department store", "Specialty store"],
	},
	{
		question:
			"Which type of store is a giant specialty store that carries a very deep assortment of a particular line and is staffed by knowledgeable employees?",
		correctAnswer: "Category killer",
		wrongAnswers: ["Supermarket", "Superstore", "Discount store"],
	},
	{
		question:
			"A retailer that buys at less-than-regular wholesale prices and sells at less than retail is generally classified as what type of retailer?",
		correctAnswer: "Off-price retailer",
		wrongAnswers: ["Discount store", "Convenience store", "Specialty store"],
	},
	{
		question:
			"What term refers to an off-price retailing operation that is owned and operated by a manufacturer and normally carries the manufacturer's surplus, discounted, or irregular goods?",
		correctAnswer: "Factory outlet",
		wrongAnswers: [
			"Independent off-price retailer",
			"Warehouse club",
			"Specialty store",
		],
	},
	{
		question:
			"What type of contractual association is between a manufacturer, wholesaler, or service organization (a franchisor) and independent businesspeople (franchisees) who buy the right to own and operate one or more units in the franchise system?",
		correctAnswer: "Franchise organization",
		wrongAnswers: [
			"Corporate chain",
			"Voluntary chain",
			"Retailer cooperative",
		],
	},
	{
		question:
			"What involves managing the upstream and downstream value-added flows of materials, final goods, and related information among suppliers, the company, resellers, and final consumers?",
		correctAnswer: "Supply chain management",
		wrongAnswers: [
			"Marketing logistics",
			"Channel management",
			"Integrated distribution",
		],
	},
	{
		question:
			"Creating a seamless cross-channel buying experience that integrates in-store, online, and mobile shopping is known as what?",
		correctAnswer: "Omni-channel retailing",
		wrongAnswers: [
			"Shopper marketing",
			"Retail convergence",
			"Green retailing",
		],
	},
	{
		question:
			"What term refers to all the activities involved in selling goods and services to those who buy for resale or business use?",
		correctAnswer: "Wholesaling",
		wrongAnswers: ["Retailing", "Marketing channels", "Logistics"],
	},
	{
		question:
			"Which type of wholesaler is independently owned and takes title to the merchandise it handles?",
		correctAnswer: "Merchant wholesaler",
		wrongAnswers: ["Broker", "Agent", "Manufacturers' and retailers' branches"],
	},
	{
		question:
			"A wholesaler who does not take title to goods and whose main function is to bring buyers and sellers together and assist in negotiation is known as what?",
		correctAnswer: "Broker",
		wrongAnswers: ["Merchant wholesaler", "Agent", "Distributor"],
	},
	{
		question:
			"What are wholesaling operations conducted by sellers or buyers themselves rather than through independent wholesalers?",
		correctAnswer: "Manufacturers' and retailers' branches and offices",
		wrongAnswers: [
			"Merchant wholesalers",
			"Brokers and agents",
			"Specialty distributors",
		],
	},
	{
		question:
			"Which trend in retailing focuses on environmentally sustainable practices?",
		correctAnswer: "Green retailing",
		wrongAnswers: [
			"Shopper marketing",
			"Retail technology",
			"Omni-channel retailing",
		],
	},
	{
		question:
			"What is the marketing process of using point-of-purchase promotions and advertising to extend brand equity to the 'last mile' and encourage favorable in-store purchase decisions?",
		correctAnswer: "Shopper marketing",
		wrongAnswers: [
			"Omni-channel retailing",
			"Retail convergence",
			"Experiential retailing",
		],
	},
	{
		question:
			"Evaluating market segments' attractiveness and selecting one or more segments to enter is known as what?",
		correctAnswer: "Market targeting (or targeting)",
		wrongAnswers: ["Market segmentation", "Differentiation", "Positioning"],
	},
	{
		question:
			"Arranging for a market offering to occupy a clear, distinctive, and desirable place relative to competing products in the minds of target consumers is called what?",
		correctAnswer: "Positioning",
		wrongAnswers: ["Segmentation", "Targeting", "Differentiation"],
	},
	{
		question:
			"What is the term for shopping in stores but then checking out online retail sites on a smartphone to compare prices and make a purchase?",
		correctAnswer: "Showrooming",
		wrongAnswers: ["Webrooming", "Omni-channel shopping", "Click-and-collect"],
	},
	// Chapter 14
	{
		question:
			"What is the term for the specific blend of advertising, sales promotion, personal selling, public relations, and direct and digital marketing tools that the company uses to communicate customer value persuasively and build customer relationships?",
		correctAnswer: "Promotion mix (or marketing communications mix)",
		wrongAnswers: ["Marketing mix", "Product mix", "Distribution channel"],
	},
	{
		question:
			"According to the sources, which of the following is considered one of the five major promotion tools?",
		correctAnswer: "Sales promotion",
		wrongAnswers: ["Packaging", "Pricing", "Product design"],
	},
	{
		question:
			"What term refers to carefully integrating and coordinating the company’s many communications channels to deliver a clear, consistent, and compelling message about the organization and its products?",
		correctAnswer: "Integrated marketing communications (IMC)",
		wrongAnswers: [
			"Marketing channel design",
			"Customer relationship management (CRM)",
			"Supply chain management",
		],
	},
	{
		question:
			"What is defined as creating, inspiring, and sharing brand messages and conversations with and among consumers across a fluid mix of paid, owned, earned, and shared channels?",
		correctAnswer: "Content marketing",
		wrongAnswers: ["Buzz marketing", "Native advertising", "Personal selling"],
	},
	{
		question:
			"In the communication process outlined in the sources, which two elements represent the major parties?",
		correctAnswer: "Sender and receiver",
		wrongAnswers: [
			"Message and media",
			"Encoding and decoding",
			"Response and feedback",
		],
	},
	{
		question:
			"According to the sources, what is the first task in preparing marketing communications?",
		correctAnswer: "Identify the target audience",
		wrongAnswers: [
			"Determine communication objectives",
			"Design a message",
			"Select communication media",
		],
	},
	{
		question:
			"Which of the following is listed as a potential communication objective (response sought) in the process of developing effective marketing communications?",
		correctAnswer: "Liking",
		wrongAnswers: ["Satisfaction", "Retention", "Advocacy"],
	},
	{
		question:
			"What type of communication channel involves two or more people communicating directly with each other, such as face-to-face, by phone, mail, e-mail, or internet chat?",
		correctAnswer: "Personal communication channels",
		wrongAnswers: [
			"Nonpersonal communication channels",
			"Integrated marketing channels",
			"Mass media channels",
		],
	},
	{
		question:
			"Which method for setting the total promotion budget involves setting the promotion budget at a certain percentage of current or forecasted sales or as a percentage of the unit sales price?",
		correctAnswer: "Percentage-of-sales method",
		wrongAnswers: [
			"Affordable method",
			"Competitive-parity method",
			"Objective-and-task method",
		],
	},
	{
		question:
			"Which promotion mix strategy calls for using the sales force and trade promotion to push the product through channels, meaning the producer promotes the product to channel members, who in turn promote it to final consumers?",
		correctAnswer: "Push strategy",
		wrongAnswers: [
			"Pull strategy",
			"Advertising strategy",
			"Direct marketing strategy",
		],
	},
	{
		question:
			"Which promotion mix strategy calls for spending a lot on consumer advertising and promotion to induce final consumers to buy the product, thereby creating a demand vacuum that pulls the product through the channel?",
		correctAnswer: "Pull strategy",
		wrongAnswers: [
			"Push strategy",
			"Sales promotion strategy",
			"Public relations strategy",
		],
	},
	{
		question:
			"What is defined as any paid form of nonpersonal presentation and promotion of ideas, goods, or services by an identified sponsor?",
		correctAnswer: "Advertising",
		wrongAnswers: ["Sales promotion", "Personal selling", "Public relations"],
	},
	{
		question:
			"What promotion tool involves building good relations with the company’s various publics by obtaining favorable publicity, building up a good corporate image, and handling or heading off unfavorable rumors, stories, and events?",
		correctAnswer: "Public relations (PR)",
		wrongAnswers: ["Advertising", "Sales promotion", "Direct marketing"],
	},
	{
		question:
			"What promotion tool consists of short-term incentives to encourage the purchase or sale of a product or service?",
		correctAnswer: "Sales promotion",
		wrongAnswers: ["Personal selling", "Advertising", "Publicity"],
	},
	{
		question:
			"What promotion tool involves making direct connections with carefully targeted individual consumers to both obtain an immediate response and cultivate lasting customer relationships?",
		correctAnswer: "Direct and digital marketing",
		wrongAnswers: ["Public relations", "Personal selling", "Mass marketing"],
	},
	// Chapter 15
	{
		question:
			"According to the sources, which promotion tool is defined as any paid form of nonpersonal presentation and promotion of ideas, goods, or services by an identified sponsor?",
		correctAnswer: "Advertising",
		wrongAnswers: ["Sales promotion", "Personal selling", "Public relations"],
	},
	{
		question:
			"What is typically the first step in developing an advertising program?",
		correctAnswer: "Setting advertising objectives",
		wrongAnswers: [
			"Setting the advertising budget",
			"Developing advertising strategy",
			"Evaluating advertising effectiveness",
		],
	},
	{
		question:
			"According to the sources, advertising strategy consists of which two major elements?",
		correctAnswer:
			"Creating advertising messages and selecting advertising media",
		wrongAnswers: [
			"Setting objectives and budget",
			"Evaluating effectiveness and ROI",
			"Public relations and sales promotion",
		],
	},
	{
		question:
			"What term is used to describe the merging of advertising and entertainment, creating messages that are better planned, more imaginative, more entertaining, and more rewarding to consumers?",
		correctAnswer: "Madison & Vine",
		wrongAnswers: [
			"Content marketing",
			"Native advertising",
			"Integrated marketing communications",
		],
	},
	{
		question:
			"What is defined as advertising or other brand-produced online content that looks in form and function much like the other natural content surrounding it on a web or social media platform?",
		correctAnswer: "Native advertising",
		wrongAnswers: [
			"Viral marketing",
			"Buzz marketing",
			"Traditional advertising",
		],
	},
	{
		question:
			"What is the term for the compelling 'big idea' that will bring an advertising message strategy to life in a distinctive and memorable way?",
		correctAnswer: "Creative concept",
		wrongAnswers: [
			"Message strategy",
			"Execution style",
			"Advertising objective",
		],
	},
	{
		question:
			"Which element of advertising message creation refers to the approach, style, tone, and format used for presenting the message?",
		correctAnswer: "Execution style",
		wrongAnswers: [
			"Creative concept",
			"Message strategy",
			"Advertising appeal",
		],
	},
	{
		question:
			"Which of the following is a key decision in advertising media selection?",
		correctAnswer: "Choosing media vehicles",
		wrongAnswers: [
			"Defining the creative concept",
			"Setting the advertising budget",
			"Identifying the target audience",
		],
	},
	{
		question:
			"What is the term for the net return on advertising investment divided by the costs of the advertising investment?",
		correctAnswer: "Return on advertising investment (ROI)",
		wrongAnswers: [
			"Advertising reach",
			"Advertising frequency",
			"Marketing ROI",
		],
	},
	{
		question:
			"What is defined as a marketing services firm that assists companies in planning, preparing, implementing, and evaluating all or portions of their advertising programs?",
		correctAnswer: "Advertising agency",
		wrongAnswers: [
			"Marketing research firm",
			"Public relations agency",
			"Media buyer",
		],
	},
	{
		question:
			"What promotion tool involves building good relations with the company’s various publics by obtaining favorable publicity, building up a good corporate image, and handling or heading off unfavorable rumors, stories, and events?",
		correctAnswer: "Public relations (PR)",
		wrongAnswers: ["Advertising", "Sales promotion", "Direct marketing"],
	},
	{
		question:
			"According to the sources, message and media decisions must be closely coordinated for what purpose?",
		correctAnswer: "Maximum campaign effectiveness",
		wrongAnswers: [
			"Lowering advertising costs",
			"Reaching the widest possible audience",
			"Measuring advertising ROI",
		],
	},
	// Chapter 16
	{
		question:
			"What is defined as the interpersonal arm of the promotion mix, involving a company's sales force making personal presentations to customers for the purpose of making sales and building customer relationships?",
		correctAnswer: "Personal selling",
		wrongAnswers: ["Advertising", "Sales promotion", "Public relations"],
	},
	{
		question:
			"According to the sources, what term refers to analyzing, planning, implementing, and controlling sales force activities?",
		correctAnswer: "Sales force management",
		wrongAnswers: [
			"Marketing management",
			"Customer relationship management",
			"Brand management",
		],
	},
	{
		question:
			"Which type of sales force structure assigns each salesperson to an exclusive geographic area in which that salesperson sells the company’s full line?",
		correctAnswer: "Territorial sales force structure",
		wrongAnswers: [
			"Product sales force structure",
			"Customer sales force structure",
			"Team selling structure",
		],
	},
	{
		question:
			"What term describes salespeople who travel to call on customers in the field?",
		correctAnswer: "Outside sales force (or field sales force)",
		wrongAnswers: [
			"Inside sales force",
			"Technical sales force",
			"Order takers",
		],
	},
	{
		question:
			"According to the sources, what is the name for using online, mobile, and social media to engage customers, build stronger customer relationships, and augment sales performance?",
		correctAnswer: "Social selling",
		wrongAnswers: ["Content marketing", "Viral marketing", "Direct marketing"],
	},
	{
		question: "What is typically the first step in the selling process?",
		correctAnswer: "Prospecting and qualifying",
		wrongAnswers: ["Preapproach", "Approach", "Presentation"],
	},
	{
		question:
			"In the selling process, what step involves learning as much as possible about a prospect before making a sales call?",
		correctAnswer: "Preapproach",
		wrongAnswers: ["Prospecting", "Approach", "Handling objections"],
	},
	{
		question:
			"What promotion tool consists of short-term incentives to encourage the purchase or sale of a product or service?",
		correctAnswer: "Sales promotion",
		wrongAnswers: ["Advertising", "Personal selling", "Publicity"],
	},
	{
		question:
			"According to the sources, which of the following is a major category of sales promotion tools?",
		correctAnswer: "Consumer promotions",
		wrongAnswers: [
			"Retailer promotions",
			"Employee promotions",
			"Management promotions",
		],
	},
	{
		question: "Which type of sales promotion tool is aimed at final consumers?",
		correctAnswer: "Consumer promotions",
		wrongAnswers: [
			"Trade promotions",
			"Business promotions",
			"Sales force promotions",
		],
	},
	{
		question:
			"Which type of sales promotion tool is aimed at retailers and wholesalers?",
		correctAnswer: "Trade promotions",
		wrongAnswers: [
			"Consumer promotions",
			"Business promotions",
			"Direct marketing promotions",
		],
	},
	{
		question:
			"Which type of sales promotion tool is aimed at business customers?",
		correctAnswer: "Business promotions",
		wrongAnswers: [
			"Consumer promotions",
			"Trade promotions",
			"Public relations",
		],
	},
	{
		question:
			"According to the sources, which of the following is an example of a consumer promotion tool?",
		correctAnswer: "Coupons",
		wrongAnswers: ["Allowances", "Sales contests for dealers", "Conventions"],
	},
	{
		question:
			"Which of the following is listed as an example of a business promotion tool?",
		correctAnswer: "Trade shows",
		wrongAnswers: ["Rebates", "Point-of-purchase promotions", "Premiums"],
	},
	// Chapter 17
	{
		question:
			"Based on the chapter outline, what type of marketing is discussed in Chapter 17 (pages 510-540)?",
		correctAnswer: "Direct, Online, Social Media, and Mobile Marketing",
		wrongAnswers: [
			"Personal Selling and Sales Promotion",
			"Advertising and Public Relations",
			"Marketing Channels",
		],
	},
	{
		question:
			"According to the sources, Chapter 17 (pages 510-540) discusses the benefits of direct and digital marketing for which groups?",
		correctAnswer: "Both buyers and sellers",
		wrongAnswers: ["Only buyers", "Only sellers", "Only intermediaries"],
	},
	{
		question:
			"Which of the following is identified as a major form of direct and digital marketing in the sources for Chapter 17?",
		correctAnswer: "Online marketing",
		wrongAnswers: ["Personal Selling", "Public Relations", "Advertising"],
	},
	{
		question:
			"According to the sources, marketing websites are a form of which type of marketing?",
		correctAnswer: "Online marketing",
		wrongAnswers: [
			"Traditional direct marketing",
			"Social media marketing",
			"Mobile marketing",
		],
	},
	{
		question:
			"The sources mention which type of online content that engages consumers and builds community around a brand, often contrasting it with marketing websites?",
		correctAnswer: "Branded community websites",
		wrongAnswers: ["Promotional blogs", "E-commerce platforms", "Viral videos"],
	},
	{
		question:
			"Which concept, described as the digital version of word-of-mouth marketing, is discussed in Chapter 17 according to the sources?",
		correctAnswer: "Viral marketing",
		wrongAnswers: [
			"Native advertising",
			"Contextual advertising",
			"Search engine optimization",
		],
	},
	{
		question:
			"The CAN-SPAM Act (2003) is linked to public policy issues in Chapter 17 concerning what?",
		correctAnswer: "Unsolicited commercial email (spam)",
		wrongAnswers: [
			"Online privacy",
			"Data security",
			"Misleading online advertising",
		],
	},
	{
		question:
			"Which of the following is listed as a *traditional* direct marketing form in the sources for Chapter 17?",
		correctAnswer: "Catalog marketing",
		wrongAnswers: [
			"Online advertising",
			"Social media marketing",
			"Mobile marketing",
		],
	},
	{
		question:
			"Which objective in the Chapter 17 outline specifically focuses on how companies use social media and mobile marketing to engage consumers?",
		correctAnswer: "Objective 17-4",
		wrongAnswers: ["Objective 17-1", "Objective 17-2", "Objective 17-3"],
	},
	{
		question:
			"Direct and digital marketing, as discussed in Chapter 17, fundamentally aims to achieve what with targeted consumers?",
		correctAnswer:
			"Obtain an immediate response and build lasting customer relationships",
		wrongAnswers: [
			"Maximize one-time sales without building relationships",
			"Focus only on mass broadcasting messages",
			"Aim to replace personal selling entirely",
		],
	},
	{
		question:
			"The sources indicate that Chapter 17 explores how companies have responded to the internet and digital age through various strategies. What is one key area of strategy mentioned?",
		correctAnswer: "Online marketing strategies",
		wrongAnswers: [
			"Traditional advertising strategies",
			"Personal selling strategies",
			"Public relations strategies",
		],
	},
	{
		question:
			"Based on the index, what type of advertising is mentioned on page 518 within the context of Chapter 17?",
		correctAnswer: "Contextual advertising",
		wrongAnswers: [
			"Native advertising",
			"Subliminal advertising",
			"Advertainment",
		],
	},
];

let currentQuestionIndex = 0;
let currentStreak = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answerEls = [
	document.getElementById("ans1"),
	document.getElementById("ans2"),
	document.getElementById("ans3"),
	document.getElementById("ans4"),
];
const feedbackEl = document.getElementById("feedback");
const streakEl = document.getElementById("streak");
const progressEl = document.getElementById("progress");

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
shuffle(questions);

function loadQuestion() {
	const q = questions[currentQuestionIndex];
	const allAnswers = shuffle([q.correctAnswer, ...q.wrongAnswers]);

	questionEl.textContent = q.question;
	feedbackEl.textContent = "";
	feedbackEl.className = "feedback";
	answered = false;

	progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${
		questions.length
	}`;

	allAnswers.forEach((ans, i) => {
		const ansBox = answerEls[i];
		ansBox.classList.remove("correct", "wrong");
		ansBox.querySelector(".text").textContent = ans;

		ansBox.onclick = (e) => {
			if (answered) return;
			answered = true;
			if (ans === q.correctAnswer) {
				ansBox.classList.add("correct");
				feedbackEl.textContent = "Correct!";
				feedbackEl.classList.add("correct");
				currentStreak++;
			} else {
				ansBox.classList.add("wrong");
				feedbackEl.textContent = `Wrong! Correct answer: ${q.correctAnswer}`;
				feedbackEl.classList.add("wrong");

				// highlight correct answer
				answerEls.forEach((el) => {
					if (el.querySelector(".text").textContent === q.correctAnswer) {
						el.classList.add("correct");
					}
				});

				currentStreak = 0;
			}
			feedbackEl.classList.add("show");
			streakEl.textContent = `🔥 Streak: ${currentStreak}`;

			// allow clicking anywhere to go to next question
			setTimeout(() => {
				document.body.addEventListener("click", nextQuestionOnce, {
					once: true,
				});
			}, 300);
		};
	});
}

function nextQuestionOnce() {
	currentQuestionIndex++;

	// If we've shown all questions, reshuffle and reset index
	if (currentQuestionIndex >= questions.length) {
		shuffle(questions);
		currentQuestionIndex = 0;
	}

	loadQuestion();
}

loadQuestion();
