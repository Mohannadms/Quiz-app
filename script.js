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

const questions = [
	{
		question:
			"What process is defined as the splitting of a heavy nucleus into smaller nuclei?",
		correctAnswer: "Nuclear Fission",
		wrongAnswers: ["Nuclear Fusion", "Radioactive decay", "Chain reaction"],
	},
	{
		question:
			"What process is defined as the combining of light nuclei to form a heavier nucleus?",
		correctAnswer: "Nuclear Fusion",
		wrongAnswers: ["Radioactive decay", "Nuclear Fission", "Chain reaction"],
	},
	{
		question:
			"Which of the following fuels is most commonly used in nuclear power plants operating today?",
		correctAnswer: "Uranium-235 (U-235)",
		wrongAnswers: [
			"Hydrogen isotopes (Deuterium, Tritium)",
			"Plutonium-239 (Pu-239)",
			"Thorium-232 (Th-232)",
		],
	},
	{
		question:
			"Which of the following is a fertile material that can be converted to fissile Uranium-233?",
		correctAnswer: "Thorium-232 (Th-232)",
		wrongAnswers: [
			"Hydrogen isotopes (Deuterium, Tritium)",
			"Plutonium-239 (Pu-239)",
			"Uranium-235 (U-235)",
		],
	},
	{
		question: "What is a key condition required for achieving nuclear fusion?",
		correctAnswer: "Extremely high temperature (~100 million °C)",
		wrongAnswers: [
			"Moderate temperature and pressure",
			"A critical mass of fuel",
			"Cooling with ordinary water",
		],
	},
	{
		question:
			"What is a key condition required for achieving nuclear fission in current power plants?",
		correctAnswer: "Moderate temperature and pressure",
		wrongAnswers: [
			"Extremely high temperature (~100 million °C)",
			"Need for external lithium breeding",
			"Minimal radioactive waste",
		],
	},
	{
		question:
			"Which nuclear power plant component is responsible for converting thermal energy from steam into mechanical energy (rotational motion)?",
		correctAnswer: "Turbine",
		wrongAnswers: ["Generator", "Condenser", "Steam Generator"],
	},
	{
		question:
			"Which nuclear power plant component is attached to the turbine and converts mechanical energy into electrical energy?",
		correctAnswer: "Generator",
		wrongAnswers: ["Condenser", "Steam Generator", "Turbine"],
	},
	{
		question:
			"What type of nuclear waste includes items like clothing, tools, or filters that have been exposed to radiation and is often safely buried in shallow landfills?",
		correctAnswer: "Low-Level Waste (LLW)",
		wrongAnswers: [
			"High-Level Waste (HLW)",
			"Intermediate-Level Waste (ILW)",
			"Spent Fuel",
		],
	},
	{
		question:
			"What type of nuclear waste comes mainly from spent nuclear fuel, is extremely radioactive, and requires cooling and secure long-term storage?",
		correctAnswer: "High-Level Waste (HLW)",
		wrongAnswers: [
			"Intermediate-Level Waste (ILW)",
			"Low-Level Waste (LLW)",
			"Decommissioning Waste",
		],
	},
	{
		question:
			"Which factor contributes significantly to the high upfront costs (CAPEX) of building a nuclear reactor?",
		correctAnswer: "Licensing, site preparation, and design",
		wrongAnswers: ["Fuel costs", "Staff salaries", "Spent fuel management"],
	},
	{
		question:
			"Which factor represents a relatively low ongoing operating cost for a nuclear reactor once built?",
		correctAnswer: "Fuel costs",
		wrongAnswers: [
			"Spent Fuel Management",
			"Staff salaries",
			"Maintenance and inspections",
		],
	},
	{
		question:
			"Which major nuclear incident in 2011 was caused by a massive earthquake and tsunami disabling backup generators, leading to loss of cooling?",
		correctAnswer: "Fukushima Daiichi",
		wrongAnswers: ["Chernobyl", "Three Mile Island", "Kyshtym"],
	},
	{
		question:
			"Which major nuclear incident in 1986 was caused by a flawed reactor design combined with serious operator errors during a safety test?",
		correctAnswer: "Chernobyl",
		wrongAnswers: ["Three Mile Island", "Kyshtym", "Fukushima Daiichi"],
	},
	{
		question:
			"What is listed as a key environmental advantage of nuclear power?",
		correctAnswer: "Very low greenhouse gas emissions",
		wrongAnswers: [
			"Minimal radioactive waste",
			"No risk of accidents",
			"Low water usage",
		],
	},
	{
		question:
			"What is listed as a key environmental disadvantage of nuclear power?",
		correctAnswer: "Radioactive Waste requiring long-term storage",
		wrongAnswers: [
			"Extremely high energy density",
			"Small land footprint",
			"Reduced air pollution",
		],
	},

	{
		question:
			"What process is defined as the splitting of a heavy nucleus into smaller nuclei?",
		correctAnswer: "Nuclear Fission",
		wrongAnswers: ["Nuclear Fusion", "Radioactive decay", "Chain reaction"],
	},
	{
		question:
			"What process is defined as the combining of light nuclei to form a heavier nucleus?",
		correctAnswer: "Nuclear Fusion",
		wrongAnswers: ["Radioactive decay", "Nuclear Fission", "Chain reaction"],
	},
	{
		question:
			"Which of the following fuels is most commonly used in nuclear power plants operating today?",
		correctAnswer: "Uranium-235 (U-235)",
		wrongAnswers: [
			"Hydrogen isotopes (Deuterium, Tritium)",
			"Plutonium-239 (Pu-239)",
			"Thorium-232 (Th-232)",
		],
	},
	{
		question:
			"Which of the following is a fertile material that can be converted to fissile Uranium-233?",
		correctAnswer: "Thorium-232 (Th-232)",
		wrongAnswers: [
			"Hydrogen isotopes (Deuterium, Tritium)",
			"Plutonium-239 (Pu-239)",
			"Uranium-235 (U-235)",
		],
	},
	{
		question:
			"What type of energy output is associated with Nuclear Fusion compared to Fission per unit mass?",
		correctAnswer: "Extremely high",
		wrongAnswers: ["High, but less than fission", "Lower", "Similar"],
	},
	{
		question:
			"Which of the following is listed as a byproduct of nuclear fission?",
		correctAnswer: "Radioactive waste",
		wrongAnswers: [
			"Minimal radioactive waste (mostly harmless helium)",
			"Water vapor",
			"Oxygen",
		],
	},
	{
		question:
			"Which type of nuclear reaction requires extremely high temperature (~100 million °C) to sustain?",
		correctAnswer: "Nuclear Fusion",
		wrongAnswers: ["Nuclear Fission", "Radioactive decay", "Chain reaction"],
	},
	{
		question:
			"What is the current use status of Nuclear Fusion as an energy source?",
		correctAnswer: "Experimental only",
		wrongAnswers: [
			"Used in nuclear power plants",
			"Commercial use since the 20th century",
			"Not currently researched",
		],
	},
	{
		question:
			"Which of the following is listed as a safety concern for nuclear fission power plants?",
		correctAnswer: "Risk of meltdown and radioactive release",
		wrongAnswers: [
			"Hard to achieve uncontrolled reaction",
			"Minimal radioactive waste",
			"Low temperature requirements",
		],
	},
	{
		question:
			"Which hydrogen isotope is radioactive and must be bred from lithium inside fusion reactors?",
		correctAnswer: "Tritium (³H or T)",
		wrongAnswers: ["Deuterium (²H or D)", "Protium (¹H)", "Hydrogen-4"],
	},
	{
		question:
			"Lithium is mentioned as a material used in fusion research for what purpose?",
		correctAnswer:
			"Used to breed tritium when bombarded with neutrons and helps in plasma control",
		wrongAnswers: [
			"Common fuel source",
			"Used as a coolant",
			"Primary structural material",
		],
	},
	{
		question: "What process generates energy in the Sun's core?",
		correctAnswer: "Hydrogen nuclei fuse to form one helium nucleus",
		wrongAnswers: [
			"Uranium atoms undergo fission",
			"Carbon atoms burn",
			"Solar panels convert sunlight to energy",
		],
	},
	{
		question:
			"In a nuclear power plant, what component circulates around the fuel rods, absorbing the heat produced by fission?",
		correctAnswer: "Water (Coolant)",
		wrongAnswers: ["Steam", "Containment Structure", "Generator"],
	},
	{
		question: "What is the function of the turbine in a nuclear power plant?",
		correctAnswer:
			"Converts thermal energy from steam into mechanical energy (rotational motion)",
		wrongAnswers: [
			"Absorbs heat from fuel rods",
			"Generates electricity",
			"Cools down used steam",
		],
	},
	{
		question:
			"What type of nuclear waste comes mainly from spent (used) nuclear fuel and is extremely radioactive?",
		correctAnswer: "High-Level Waste (HLW)",
		wrongAnswers: [
			"Low-Level Waste (LLW)",
			"Intermediate-Level Waste (ILW)",
			"Decommissioning Waste",
		],
	},
	{
		question:
			"Why is spent nuclear fuel not typically used again in most current reactors?",
		correctAnswer:
			"Fuel composition changes after being used, reprocessing is expensive, most reactors aren’t designed for recycled fuel, and there are political and public concerns like nuclear weapons proliferation",
		wrongAnswers: [
			"It becomes harmless after leaving the reactor",
			"There is no energy left in spent fuel",
			"Environmental regulations prohibit its reuse",
			"It is not possible to reprocess it technologically",
		],
	},
	{
		question:
			"What is the typical CAPEX (Capital Expenditure) range mentioned for building a single nuclear reactor (1–1.6 GW capacity)?",
		correctAnswer: "$6–12 billion USD",
		wrongAnswers: [
			"$500 million–$1 billion USD",
			"$1–2 billion USD",
			"$20–30 billion USD",
		],
	},
	{
		question:
			"Which of the following is listed as a key factor contributing to the CAPEX of a nuclear reactor?",
		correctAnswer:
			"Licensing, site preparation, design, materials and labor, and delays",
		wrongAnswers: [
			"Fuel costs and staff salaries",
			"Spent fuel management",
			"Decommissioning costs",
		],
	},
	{
		question:
			"Which part of the nuclear fuel cycle is described as relatively low in cost?",
		correctAnswer: "Uranium Mining & Milling",
		wrongAnswers: [
			"Enrichment & Fabrication",
			"Spent Fuel Management",
			"Decommissioning",
		],
	},
	{
		question: "What is listed as a major advantage of nuclear energy?",
		correctAnswer: "Very low greenhouse gas emissions",
		wrongAnswers: [
			"Extremely high upfront costs",
			"Long construction times",
			"Complex waste and decommissioning issues",
		],
	},
	{
		question: "What is listed as a major disadvantage of nuclear energy?",
		correctAnswer: "Extremely high upfront costs and financial risk",
		wrongAnswers: [
			"Low operating costs once built",
			"Stable, large-scale electricity supply",
			"Very low greenhouse gas emissions",
		],
	},
	{
		question:
			"Which major nuclear incident was caused by a massive earthquake and tsunami disabling backup generators, leading to loss of cooling and hydrogen explosions?",
		correctAnswer: "Fukushima Daiichi, Japan (2011)",
		wrongAnswers: [
			"Chernobyl, USSR (Ukraine) (1986)",
			"Kyshtym, USSR (Russia) (1957)",
			"Three Mile Island, USA",
		],
	},
	{
		question: "What was a cause of the Chernobyl nuclear incident?",
		correctAnswer:
			"A flawed reactor design combined with serious operator errors during a safety test",
		wrongAnswers: [
			"Failure of a cooling system in a tank of liquid radioactive waste",
			"Mechanical failure and human error leading to partial core meltdown",
			"A massive earthquake and tsunami",
		],
	},
	{
		question:
			"Which environmental impact is associated with nuclear plants discharging heated water into rivers or oceans?",
		correctAnswer: "Thermal Pollution",
		wrongAnswers: ["Radioactive Waste", "Air Pollution", "Land Degradation"],
	},
	{
		question:
			"What is one environmental issue mentioned regarding Uranium mining and processing?",
		correctAnswer:
			"Land degradation, water contamination, and exposure to radiation",
		wrongAnswers: [
			"Minimal radioactive waste generation",
			"Only emits harmless helium",
			"Requires very little land",
		],
	},
	{
		question:
			"Compared to coal or gas plants, nuclear reactors do not emit harmful pollutants like sulfur dioxide, nitrogen oxides, or particulate matter. Which advantage does this relate to?",
		correctAnswer: "Reduced Air Pollution",
		wrongAnswers: [
			"Low Greenhouse Gas Emissions",
			"Small Land Footprint",
			"High Energy Density",
		],
	},
	{
		question:
			"Uranium contains significantly more energy per unit mass than fossil fuels. Which advantage does this relate to?",
		correctAnswer: "High Energy Density",
		wrongAnswers: [
			"Reduced Air Pollution",
			"Small Land Footprint",
			"Low Greenhouse Gas Emissions",
		],
	},
	{
		question:
			"How many reactors is Egypt currently constructing and what is their capacity?",
		correctAnswer: "4 reactors with a capacity of 1100 MWe each",
		wrongAnswers: [
			"1 reactor with a capacity of 1000 MWe",
			"2 reactors with a capacity of 1200 MWe each",
			"6 reactors with a capacity of 800 MWe each",
		],
	},
	// Hydropower
	{
		question: "What is the primary purpose of a dam?",
		correctAnswer: "To control and store water, creating a reservoir",
		wrongAnswers: [
			"To divert water into canals for irrigation",
			"To release excess heat from a cooling system",
			"To breed tritium from lithium",
		],
	},
	{
		question: "What is the primary purpose of a barrage?",
		correctAnswer:
			"To regulate and control water flow, typically to divert water",
		wrongAnswers: [
			"To store large volumes of water",
			"To generate seismic activity",
			"To convert thermal energy into mechanical energy",
		],
	},
	{
		question:
			"Which hydropower structure typically creates a reservoir by impounding water behind it?",
		correctAnswer: "Dam",
		wrongAnswers: ["Barrage", "Cooling Tower", "Steam Generator"],
	},
	{
		question:
			"Which hydropower structure consists of a series of gates or barriers that can be opened or closed to manage water movement?",
		correctAnswer: "Barrage",
		wrongAnswers: ["Dam", "Reactor Containment Structure", "Turbine"],
	},
	{
		question:
			"Compared to dams, what is a characteristic impact of barrages on the environment?",
		correctAnswer: "Little or No Impact",
		wrongAnswers: [
			"Significant Impact",
			"Causes thermal pollution",
			"Generates high levels of radioactive waste",
		],
	},
	{
		question:
			"A hydropower plant with a capacity ranging from 1 MW to 10-30 MW is classified as what type?",
		correctAnswer: "Small Hydropower",
		wrongAnswers: ["Micro Hydropower", "Mini Hydropower", "Large Hydropower"],
	},
	{
		question:
			"A hydropower plant with a capacity above 10-30 MW is classified as what type?",
		correctAnswer: "Large Hydropower",
		wrongAnswers: ["Micro Hydropower", "Mini Hydropower", "Small Hydropower"],
	},
	{
		question: "What is the capacity range for Micro Hydropower?",
		correctAnswer: "1 kW to 100 kW",
		wrongAnswers: ["100 kW to 1 MW", "1 MW to 10 MW", "Above 30 MW"],
	},
	{
		question: "What is the capacity range for Mini Hydropower?",
		correctAnswer: "100 kW to 1 MW",
		wrongAnswers: ["1 kW to 100 kW", "1 MW to 10 MW", "Above 30 MW"],
	},
	{
		question: "What type of material are dams typically constructed from?",
		correctAnswer: "Solid Concrete",
		wrongAnswers: ["Steel Lattice", "Wood Planks", "Reinforced Plastic Sheets"],
	},
	{
		question:
			"Besides hydroelectric power generation, what is a significant purpose of dams related to managing water resources?",
		correctAnswer:
			"Water supply (for drinking, irrigation, industrial use) and flood control",
		wrongAnswers: [
			"Enhancing air quality through water filtration",
			"Increasing wind speed for wind farms",
			"Extracting geothermal heat from deep reservoirs",
		],
	},
	{
		question:
			"Barrages are commonly used for what specific purpose by redirecting water into canals?",
		correctAnswer: "Irrigation",
		wrongAnswers: [
			"Creating large recreational lakes",
			"Deep geological waste storage",
			"Breeding tritium from lithium",
		],
	},
	{
		question:
			"Which environmental impact of large dams is associated with the pressure from the structure and the reservoir water?",
		correctAnswer: "Geological Effects (e.g., seismic activity)",
		wrongAnswers: [
			"Radioactive waste generation",
			"Thermal pollution",
			"High greenhouse gas emissions",
		],
	},
	{
		question:
			"The geological effects, such as induced seismic activity near large dams, are primarily caused by what factor?",
		correctAnswer: "Pressure from the dam structure and the reservoir water",
		wrongAnswers: [
			"Release of toxic chemicals from the reservoir bed",
			"Sonic vibrations from the turbines",
			"Accumulation of sediment behind the dam",
		],
	},
	{
		question:
			"Which environmental impact of hydropower involves restricting the flow of sediments, which can affect farmlands downstream?",
		correctAnswer: "Sedimentation",
		wrongAnswers: ["Biodiversity loss", "Resettlement", "Thermal pollution"],
	},
	{
		question:
			"Sedimentation caused by dams primarily impacts farmlands and agriculture by restricting the flow of what critical resource?",
		correctAnswer: "Sediments",
		wrongAnswers: ["Nutrients", "Water volume", "Oxygen"],
	},
	{
		question:
			"Which environmental impact of hydropower involves the destruction of homes, impacting endangered species, and deforestation?",
		correctAnswer: "Biodiversity loss",
		wrongAnswers: ["Sedimentation", "Geological Effects", "Thermal pollution"],
	},
	{
		question:
			"The need to relocate people whose homes will be destroyed is an environmental impact primarily associated with which type of hydropower structure?",
		correctAnswer: "Dams",
		wrongAnswers: ["Barrages", "Tidal Power plants", "Solar farms"],
	},
	{
		question:
			"Which specific large dam project is mentioned as requiring the resettlement of 1.3 million people?",
		correctAnswer: "Three Gorges Dam",
		wrongAnswers: ["Aswan High Dam", "Hoover Dam", "La Rance Tidal Station"],
	},
	{
		question:
			"The restriction of water flow to other countries downstream is listed as what type of impact associated with dams?",
		correctAnswer: "Political",
		wrongAnswers: ["Environmental", "Economic", "Safety"],
	},
	{
		question:
			"Which specific dam project is presented as an example of the political impact of restricting water flow to downstream countries, specifically regarding Egypt?",
		correctAnswer: "Ethiopia Renaissance Dam",
		wrongAnswers: [
			"Three Mile Island Reactor",
			"Vogtle Plant",
			"La Rance Station",
		],
	},
	{
		question:
			"What is the typical range for greenhouse gas emissions from hydropower per MWh?",
		correctAnswer: "10 – 13 kg/MWh",
		wrongAnswers: ["0 kg/MWh", "50 - 100 kg/MWh", "More than 500 kg/MWh"],
	},
	{
		question:
			"Tidal power is listed as a type of energy generation within which broader category?",
		correctAnswer: "Hydropower",
		wrongAnswers: ["Nuclear Energy", "Solar Energy", "Wind Energy"],
	},
	{
		question:
			"The La Rance station in France is identified as the first example of what specific type of hydropower generation?",
		correctAnswer: "Tidal Power",
		wrongAnswers: [
			"Run-of-river hydropower",
			"Pumped-storage hydropower",
			"Small hydropower",
		],
	},
	{
		question:
			"How much electricity does hydropower generate annually in Egypt?",
		correctAnswer: "10 Billion kWh",
		wrongAnswers: ["149 Billion kWh", "210 TWh", "6.7 Billion kWh"],
	},
	// Wind
	{
		question:
			"According to the lecture outline, which of the following is NOT a topic covered in the Introduction to Wind Energy lecture?",
		correctAnswer: "Types of Nuclear Energy",
		wrongAnswers: [
			"History of Wind Energy",
			"Amount of Energy we Can Get",
			"Impact on the Environment",
		],
	},
	{
		question:
			"According to the source, what is the estimated annual global potential for onshore and offshore wind generation at 90m turbine hub heights?",
		correctAnswer: "872,000 TWh",
		wrongAnswers: ["26,573 TWh", "555 TWh", "1,890 TWh"],
	},
	{
		question:
			"What was the total global electricity use in 2022, according to the source provided in the lecture?",
		correctAnswer: "26,573 TWh",
		wrongAnswers: ["872,000 TWh", "170 TWh", "210 TWh"],
	},
	{
		question:
			"The lecture notes pose a question regarding the significant potential of wind energy compared to actual production. What is the essence of this question?",
		correctAnswer:
			"Why does wind energy not produce the numbers mentioned (referring to the potential)?",
		wrongAnswers: [
			"How much energy can we get from wind annually?",
			"What is the total wind energy capacity in Egypt?",
			"What is the cost of wind energy?",
		],
	},
	{
		question:
			"According to the graph shown for Wind Energy in Egypt, what was the total wind energy capacity in 2012?",
		correctAnswer: "555 MW",
		wrongAnswers: ["755 MW", "1,130 MW", "1,890 MW"],
	},
	{
		question:
			"Based on the graph presented in the lecture, what was the total wind energy capacity in Egypt in 2023?",
		correctAnswer: "1,890 MW",
		wrongAnswers: ["555 MW", "1,643 MW", "1,132 MW"],
	},
	{
		question:
			"Looking at the trend shown in the graph for Wind Energy in Egypt from 2012 to 2023, what generally happened to the total wind energy capacity?",
		correctAnswer: "It showed a consistent increase.",
		wrongAnswers: [
			"It remained relatively constant.",
			"It decreased significantly.",
			"It fluctuated wildly with no clear trend.",
		],
	},
	{
		question:
			"Which year marked the highest total wind energy capacity shown on the graph for Wind Energy in Egypt between 2012 and 2023?",
		correctAnswer: "2023",
		wrongAnswers: ["2012", "2016", "2021"],
	},
	// Solar
	{
		question:
			"Based on the lecture outline for Introduction to Solar Energy, which topic is NOT listed as being covered?",
		correctAnswer: "Sources of Nuclear Energy",
		wrongAnswers: [
			"History of Solar Energy",
			"Life Cycle of Solar Panel",
			"Solar Power Emissions",
		],
	},
	{
		question:
			"Except for nuclear, tidal, and geothermal energy, how are all other major sources of electricity described as being connected?",
		correctAnswer: "Directly or indirectly linked to the sun",
		wrongAnswers: [
			"Derived from the Earth's core",
			"Dependent on the gravitational pull of the moon",
			"Created through chemical reactions underground",
		],
	},
	{
		question:
			"Around the 7th Century BC, what was the earliest recorded use related to harnessing sunlight?",
		correctAnswer: "First Use of Magnifying Glass",
		wrongAnswers: [
			"Used mirrors to concentrate sunlight for torches",
			"Developed hot boxes to measure heating effects",
			"Built the world's first solar power plant",
		],
	},
	{
		question:
			"The discovery that selenium produces electricity when exposed to sunlight without moving parts was made by Adams and Evans in what year?",
		correctAnswer: "1876",
		wrongAnswers: ["1839", "1873", "1891"],
	},
	{
		question:
			"What notable solar energy development occurred in Cairo, Egypt in 1912?",
		correctAnswer: "The world's first successful solar-power plant was built",
		wrongAnswers: [
			"The first commercial solar water heater was patented",
			"Giant mirrors were used to burn invading ships",
			"The photovoltaic effect was discovered",
		],
	},
	{
		question:
			"When considering the anatomy of the sun, which layer is described as the innermost layer we can observe directly and where most of the sun's energy is emitted?",
		correctAnswer: "The Photosphere",
		wrongAnswers: ["The Core", "The Radiative Zone", "The Corona"],
	},
	{
		question:
			"What is the average value of solar radiation reaching the Earth's surface, measured in Watts per square meter (W/m²)?",
		correctAnswer: "170 W/m²",
		wrongAnswers: ["1361 W/m²", "300 W/m²", "230,000,000 W/m²"],
	},
	{
		question:
			"According to the lecture's breakdown of solar radiation reaching Earth, which type of radiation makes up the largest percentage?",
		correctAnswer: "Infrared Radiation (47%)",
		wrongAnswers: [
			"Ultraviolet Radiation (3%)",
			"Visible Light (50%)",
			"Massless Neutrinos",
		],
	},
	{
		question:
			"Which solar thermal power generation method uses flat or almost flat mirrors mounted at ground level and is described as lower cost compared to parabolic troughs?",
		correctAnswer: "Fresnel Reflector",
		wrongAnswers: ["Parabolic Trough", "Solar Tower", "Solar Dishes"],
	},
	{
		question:
			"What range is given for the typical operating life of a solar panel?",
		correctAnswer: "20-30 Years",
		wrongAnswers: ["5-10 Years", "50-60 Years", "10-15 Years"],
	},
	{
		question:
			"A disadvantage of solar power mentioned is the amount of water needed for steam generation. Approximately how much freshwater is used per MWh?",
		correctAnswer: "800 gallons",
		wrongAnswers: ["80 gallons", "8,000 gallons", "8 million gallons"],
	},
	{
		question:
			"By 2030, approximately how many tons of disposed solar panels are projected, highlighting a waste management challenge?",
		correctAnswer: "8 million tones",
		wrongAnswers: [
			"8 thousand tones",
			"80 thousand tones",
			"800 thousand tones",
		],
	},
	{
		question:
			"Compared to other energy sources like Fossil Fuels (2500 W/m²) or Nuclear (700 W/m²), what is the approximate energy production density for Solar Energy listed in the lecture materials?",
		correctAnswer: "30 W/m²",
		wrongAnswers: ["1.5 W/m²", "700 W/m²", "2500 W/m²"],
	},
	// Hydrocrabons GHG
	{
		question:
			"Which of the following is explicitly listed as a greenhouse gas in the lecture material?",
		correctAnswer: "Sulphur Hexafluoride",
		wrongAnswers: ["Ozone", "Sulfur Dioxide", "Carbon Monoxide"],
	},
	{
		question:
			"The lecture material identifies several greenhouse gases. Which of these is listed as a hydrogen-containing gas?",
		correctAnswer: "Methane",
		wrongAnswers: ["Carbon Dioxide", "Nitrogen Oxides", "Perfluorocarbons"],
	},
	{
		question:
			"When discussing global warming, how old is our planet stated to be?",
		correctAnswer: "Approximately 4.5 Billion Years Old",
		wrongAnswers: [
			"Approximately 6,000 Years Old",
			"Approximately 1 million Years Old",
			"Approximately 1 trillion Years Old",
		],
	},
	{
		question:
			"In the discussion on Egypt's emissions, what was the estimated total global CO2 equivalent emissions in Mton?",
		correctAnswer: "52962.9",
		wrongAnswers: ["335.97", "0.65", "529.629"],
	},
	{
		question:
			"What percentage of the total global CO2 equivalent emissions did Egypt's emissions represent, according to the lecture material?",
		correctAnswer: "Less than 0.65%",
		wrongAnswers: ["More than 5%", "Exactly 0.65%", "Between 1% and 2%"],
	},
	{
		question:
			"For the greenhouse gas assignment experiment, how many 2-liter bottles are needed?",
		correctAnswer: "Two",
		wrongAnswers: ["One", "Three", "Four"],
	},
	{
		question:
			"In the greenhouse gas assignment experiment using 2-liter bottles, why is the shorter bottle used?",
		correctAnswer: "As a control because it will not trap air as well",
		wrongAnswers: [
			"To collect water vapor",
			"To measure the temperature difference",
			"To simulate a different atmosphere",
		],
	},
	{
		question:
			"If the weather is cloudy, what alternative is suggested for providing heat for the greenhouse gas assignment experiment?",
		correctAnswer: "A 100+ watt bulb in a clip-on lamp",
		wrongAnswers: ["An oven", "A hairdryer", "Direct sunlight"],
	},
	{
		question:
			"How long should the 2-liter bottles sit in direct sunlight (or under the alternative heat source) for the greenhouse gas assignment experiment?",
		correctAnswer: "30 to 50 minutes",
		wrongAnswers: ["5 to 10 minutes", "1 to 2 hours", "50 to 60 minutes"],
	},
	{
		question:
			"What is one of the deliverables required for the greenhouse gas assignment, related to documenting the experiment?",
		correctAnswer: "Record a short three to five minute video",
		wrongAnswers: [
			"Write a long essay explaining the results",
			"Take a series of photographs",
			"Build a physical model of the experiment",
		],
	},
	{
		question:
			"In addition to a video, what written component is required for the greenhouse gas assignment?",
		correctAnswer: "Write a 500 word reflection on your observation",
		wrongAnswers: [
			"Write a 1000 word research paper",
			"Summarize the experiment steps in bullet points",
			"Create a presentation slides",
		],
	},
	// Hydrocarbons Energy
	{
		question:
			"How is the concept of 'Energy' primarily defined within the lecture materials?",
		correctAnswer: "The ability to do work",
		wrongAnswers: [
			"The flow of heat",
			"The capacity to generate electricity",
			"The rate at which work is done",
		],
	},
	{
		question:
			"Based on the outline presented for the lecture on Hydrocarbons As An Energy Source, which topic is listed?",
		correctAnswer: "Why Are Hydrocarbons So Popular",
		wrongAnswers: [
			"Major Nuclear Incidents",
			"Impact on Biodiversity",
			"The Sun's Anatomy",
		],
	},
	{
		question:
			"To compare the energy production capability per unit area of different energy types, what specific unit is used in the lecture?",
		correctAnswer: "Watts per square meter (W/m²)",
		wrongAnswers: [
			"Kilowatt-hours (kWh)",
			"Joules per second (J/s)",
			"MegaJoules per kilogram (MJ/kg)",
		],
	},
	{
		question:
			"What is the approximate energy production density figure provided for Fossil Fuels, measured in W/m²?",
		correctAnswer: "2500 W/m²",
		wrongAnswers: ["1.5 W/m²", "30 W/m²", "700 W/m²"],
	},
	{
		question:
			"The energy production density for Wind power is presented with what value in W/m²?",
		correctAnswer: "1.5 W/m²",
		wrongAnswers: ["2500 W/m²", "30 W/m²", "700 W/m²"],
	},
	{
		question:
			"What W/m² number is listed as the energy production density for Solar energy?",
		correctAnswer: "30 W/m²",
		wrongAnswers: ["2500 W/m²", "1.5 W/m²", "700 W/m²"],
	},
	{
		question:
			"How many Watts per square meter are given as the energy production density for Nuclear power?",
		correctAnswer: "700 W/m²",
		wrongAnswers: ["2500 W/m²", "1.5 W/m²", "30 W/m²"],
	},
	{
		question:
			"Comparing the listed energy production densities (W/m²), which energy type has the highest value?",
		correctAnswer: "Fossil Fuels",
		wrongAnswers: ["Wind", "Solar", "Nuclear"],
	},
	{
		question:
			"Based on the provided W/m² figures, which energy type shows the smallest energy production density?",
		correctAnswer: "Wind",
		wrongAnswers: ["Fossil Fuels", "Solar", "Nuclear"],
	},
	{
		question:
			"What approximate value is mentioned for the estimated Global Power Demand, in Trillion Watts?",
		correctAnswer: "3 Trillion Watts",
		wrongAnswers: [
			"1.5 Trillion Watts",
			"30 Trillion Watts",
			"700 Trillion Watts",
		],
	},
	{
		question:
			"If the efficiency of an energy system were reduced by half, as discussed in the lecture, how would this impact the energy production density (W/m²) value?",
		correctAnswer: "The number would be divided by 2",
		wrongAnswers: [
			"The number would double",
			"The number would remain the same",
			"The number would be multiplied by 10",
		],
	},
	// Hydrocarbons History
	{
		question:
			"The lecture introduces three common types of hydrocarbons. Which of the following is included?",
		correctAnswer: "Coal",
		wrongAnswers: ["Ethanol", "Natural Gas Liquids", "Shale Oil"],
	},
	{
		question:
			"In ancient Mesopotamia, specifically in Hit, what substance derived from hydrocarbons was employed as mortar, waterproofing, and adhesive approximately 6000 years ago?",
		correctAnswer: "Asphalt",
		wrongAnswers: ["Tar", "Bitumen", "Pitch"],
	},
	{
		question:
			"Around 4000 B.C., the Babylonians utilized bitumen for what purpose related to water transport?",
		correctAnswer: "Caulking ships",
		wrongAnswers: ["Fueling lamps", "Sealing pottery", "Building docks"],
	},
	{
		question:
			"How did the ancient Egyptians incorporate asphalt and bitumen into their practices around 3000 B.C.?",
		correctAnswer: "As embalming material and in pyramid construction",
		wrongAnswers: ["For cooking food", "To heat their homes", "As currency"],
	},
	{
		question:
			"During the 4th Century, Romans are noted for using asphalt in what significant infrastructure project?",
		correctAnswer: "Road and pavement construction",
		wrongAnswers: [
			"Aqueduct building",
			"Temple foundations",
			"Public bath heating",
		],
	},
	{
		question:
			"What medicinal belief about oil was held by the Persians around the 10th Century?",
		correctAnswer: "It had medicinal benefits",
		wrongAnswers: [
			"It brought bad luck",
			"It could purify water",
			"It caused illness",
		],
	},
	{
		question:
			"American Indian tribes in the 16th Century used oil and asphalt for several applications. Which of these was a listed use?",
		correctAnswer: "Lamps, waterproofing, and medicine for cough and cold",
		wrongAnswers: ["Weapon making", "Crop irrigation", "Building shelters"],
	},
	{
		question:
			"The Seneca Tribe in New York in the early 1800s traded 'Seneca Oil'. What was its approximate value per liter compared to a worker's daily wage?",
		correctAnswer: "$20 USD per liter when a daily wage was a few pennies",
		wrongAnswers: [
			"Equivalent to a daily wage",
			"Less than a penny per liter",
			"Hundreds of dollars per liter",
		],
	},
	{
		question:
			"When did the first recorded drilled well for oil production occur, marking a significant step towards hydrocarbon industrialization?",
		correctAnswer:
			"It was drilled by Edwin Drake in the US after failed attempts to dig a mine shaft",
		wrongAnswers: [
			"In ancient China",
			"In the Middle East during the 10th century",
			"In Egypt for building pyramids",
		],
	},
	{
		question:
			"The lecture discusses how hydrocarbons influenced modern economies. What role is highlighted?",
		correctAnswer:
			"Driving the Industrial Revolution and increasing country productivity",
		wrongAnswers: [
			"Promoting global peace",
			"Decreasing the need for international trade",
			"Reducing the importance of political decisions",
		],
	},
	{
		question:
			"Which of the following conflicts is specifically mentioned as a war fought over oil?",
		correctAnswer: "The Gulf War [1990 – 1991]",
		wrongAnswers: [
			"The Hundred Years' War",
			"The Napoleonic Wars",
			"The Crimean War",
		],
	},
];

const questions = [
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
		wrongAnswers: ["Demographic segmentation", "Psychographic segmentation", "Behavioral segmentation"],
	},
	{
		question:
			"Which type of market segmentation divides the market into groups based on variables such as age, gender, family size, family life cycle, income, occupation, education, religion, race, generation, and nationality?",
		correctAnswer: "Demographic segmentation",
		wrongAnswers: ["Geographic segmentation", "Psychographic segmentation", "Behavioral segmentation"],
	},
	{
		question:
			"Which type of demographic segmentation divides the market into different age and life-cycle groups?",
		correctAnswer: "Age and life-cycle segmentation",
		wrongAnswers: ["Gender segmentation", "Income segmentation", "Occasion segmentation"],
	},
	{
		question:
			"Which type of demographic segmentation divides a market into different groups based on gender?",
		correctAnswer: "Gender segmentation",
		wrongAnswers: ["Age and life-cycle segmentation", "Income segmentation", "Benefit segmentation"],
	},
	{
		question:
			"Which type of market segmentation divides buyers into different groups based on lifestyle or personality characteristics?",
		correctAnswer: "Psychographic segmentation",
		wrongAnswers: ["Geographic segmentation", "Demographic segmentation", "Behavioral segmentation"],
	},
	{
		question:
			"Which type of market segmentation divides buyers into groups based on their knowledge, attitudes, uses, or responses concerning a product?",
		correctAnswer: "Behavioral segmentation",
		wrongAnswers: ["Geographic segmentation", "Demographic segmentation", "Psychographic segmentation"],
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
		wrongAnswers: ["Geographic segmentation", "Demographic segmentation", "Psychographic segmentation"],
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
		wrongAnswers: ["Differentiated (segmented) marketing", "Concentrated (niche) marketing", "Micromarketing"],
	},
	{
		question:
			"Which market targeting strategy involves a firm deciding to target several market segments and designs separate offers for each?",
		correctAnswer: "Differentiated (segmented) marketing",
		wrongAnswers: ["Undifferentiated (mass) marketing", "Concentrated (niche) marketing", "Micromarketing"],
	},
	{
		question:
			"Which market targeting strategy involves a firm going after a large share of one or a few segments or niches?",
		correctAnswer: "Concentrated (niche) marketing",
		wrongAnswers: ["Undifferentiated (mass) marketing", "Differentiated (segmented) marketing", "Micromarketing"],
	},
	{
		question:
			"Which market targeting strategy involves tailoring products and marketing programs to the needs and wants of specific individuals and local customer segments?",
		correctAnswer: "Micromarketing (local or individual marketing)",
		wrongAnswers: ["Undifferentiated (mass) marketing", "Differentiated (segmented) marketing", "Concentrated (niche) marketing"],
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
		wrongAnswers: ["Market segmentation", "Market targeting", "Differentiation"],
	},
	{
		question:
			"According to the sources, what is the way a product is defined by consumers on important attributes—the place the product occupies in consumers' minds relative to competing products?",
		correctAnswer: "Product position",
		wrongAnswers: ["Value proposition", "Competitive advantage", "Market segment"],
	},
	{
		question:
			"What concept is described as an advantage over competitors gained by offering greater customer value, either by having lower prices or providing more benefits that justify higher prices?",
		correctAnswer: "Competitive advantage",
		wrongAnswers: ["Value proposition", "Market position", "Product differentiation"],
	},
	{
		question:
			"What is the term used to describe the set of benefits or values a company promises to deliver to consumers to satisfy their needs?",
		correctAnswer: "Value proposition",
		wrongAnswers: ["Product position", "Competitive advantage", "Marketing mix"],
	}
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
