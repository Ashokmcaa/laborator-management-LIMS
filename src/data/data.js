const data = [
  {
    id: 1,
    name: "Lab B",
    city: "New York",
    cluster: "East Coast",
    availableEquipment: ["Microscope", "PCR Machine"],
    fuelOilParameters: {
      viscosity: "35",
      sulfurContent: "0.5%",
      waterContent: "0.1%",
      flashPoint: "100\u00b0C",
    },
    status: "Live",
  },
  {
    id: 2,
    name: "Lab C",
    city: "San Francisco",
    cluster: "West Coast",
    availableEquipment: ["Xray", "MRI Scanner"],
    fuelOilParameters: {
      viscosity: "28",
      sulfurContent: "0.3%",
      waterContent: "0.2%",
      flashPoint: "90\u00b0C",
    },
    status: "Under Maintenance",
  },
  {
    id: 3,
    name: "Lab D",
    city: "Chicago",
    cluster: "Midwest",
    availableEquipment: ["Centrifuge", "Spectrometer"],
    fuelOilParameters: {
      viscosity: "29",
      sulfurContent: "0.5%",
      waterContent: "0.1%",
      flashPoint: "95\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 4,
    name: "Lab E",
    city: "Houston",
    cluster: "Southwest",
    availableEquipment: ["Autoclave", "Ultrasound"],
    fuelOilParameters: {
      viscosity: "32",
      sulfurContent: "0.7%",
      waterContent: "0.2%",
      flashPoint: "85\u00b0C",
    },
    status: "Live",
  },
  {
    id: 5,
    name: "Lab F",
    city: "Boston",
    cluster: "East Coast",
    availableEquipment: ["Gas Chromatograph", "DNA Sequencer"],
    fuelOilParameters: {
      viscosity: "33",
      sulfurContent: "0.4%",
      waterContent: "0.3%",
      flashPoint: "110\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 6,
    name: "Lab G",
    city: "Seattle",
    cluster: "Northwest",
    availableEquipment: ["Xray", "MRI Scanner"],
    fuelOilParameters: {
      viscosity: "25",
      sulfurContent: "0.2%",
      waterContent: "0.2%",
      flashPoint: "90\u00b0C",
    },
    status: "Live",
  },
  {
    id: 7,
    name: "Lab H",
    city: "Miami",
    cluster: "East Coast",
    availableEquipment: ["Autoclave", "Microscope"],
    fuelOilParameters: {
      viscosity: "24",
      sulfurContent: "0.6%",
      waterContent: "0.2%",
      flashPoint: "80\u00b0C",
    },
    status: "Closed",
  },
  {
    id: 8,
    name: "Lab I",
    city: "Denver",
    cluster: "Mountain",
    availableEquipment: ["Microscope", "Spectrometer"],
    fuelOilParameters: {
      viscosity: "30",
      sulfurContent: "0.5%",
      waterContent: "0.1%",
      flashPoint: "95\u00b0C",
    },
    status: "Under Maintenance",
  },
  {
    id: 9,
    name: "Lab J",
    city: "Atlanta",
    cluster: "South",
    availableEquipment: ["Gas Chromatograph", "Ultrasound"],
    fuelOilParameters: {
      viscosity: "28",
      sulfurContent: "0.4%",
      waterContent: "0.2%",
      flashPoint: "100\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 10,
    name: "Lab K",
    city: "Los Angeles",
    cluster: "West Coast",
    availableEquipment: ["PCR Machine", "Xray"],
    fuelOilParameters: {
      viscosity: "27",
      sulfurContent: "0.3%",
      waterContent: "0.1%",
      flashPoint: "90\u00b0C",
    },
    status: "Live",
  },
  {
    id: 11,
    name: "Lab L",
    city: "Phoenix",
    cluster: "Southwest",
    availableEquipment: ["Centrifuge", "Gas Chromatograph"],
    fuelOilParameters: {
      viscosity: "31",
      sulfurContent: "0.7%",
      waterContent: "0.2%",
      flashPoint: "85\u00b0C",
    },
    status: "Under Maintenance",
  },
  {
    id: 12,
    name: "Lab M",
    city: "Dallas",
    cluster: "Southwest",
    availableEquipment: ["MRI Scanner", "Autoclave"],
    fuelOilParameters: {
      viscosity: "26",
      sulfurContent: "0.5%",
      waterContent: "0.3%",
      flashPoint: "100\u00b0C",
    },
    status: "Live",
  },
  {
    id: 13,
    name: "Lab N",
    city: "Austin",
    cluster: "Southwest",
    availableEquipment: ["Ultrasound", "Spectrometer"],
    fuelOilParameters: {
      viscosity: "29",
      sulfurContent: "0.3%",
      waterContent: "0.2%",
      flashPoint: "90\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 14,
    name: "Lab O",
    city: "San Diego",
    cluster: "West Coast",
    availableEquipment: ["Microscope", "Centrifuge"],
    fuelOilParameters: {
      viscosity: "27",
      sulfurContent: "0.4%",
      waterContent: "0.1%",
      flashPoint: "95\u00b0C",
    },
    status: "Closed",
  },
  {
    id: 15,
    name: "Lab P",
    city: "San Jose",
    cluster: "West Coast",
    availableEquipment: ["Gas Chromatograph", "Ultrasound"],
    fuelOilParameters: {
      viscosity: "26",
      sulfurContent: "0.5%",
      waterContent: "0.3%",
      flashPoint: "85\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 16,
    name: "Lab Q",
    city: "Portland",
    cluster: "Northwest",
    availableEquipment: ["Xray", "Spectrometer"],
    fuelOilParameters: {
      viscosity: "32",
      sulfurContent: "0.6%",
      waterContent: "0.2%",
      flashPoint: "100\u00b0C",
    },
    status: "Live",
  },
  {
    id: 17,
    name: "Lab R",
    city: "Detroit",
    cluster: "Midwest",
    availableEquipment: ["DNA Sequencer", "PCR Machine"],
    fuelOilParameters: {
      viscosity: "34",
      sulfurContent: "0.3%",
      waterContent: "0.1%",
      flashPoint: "110\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 18,
    name: "Lab S",
    city: "Nashville",
    cluster: "South",
    availableEquipment: ["Microscope", "Autoclave"],
    fuelOilParameters: {
      viscosity: "30",
      sulfurContent: "0.5%",
      waterContent: "0.2%",
      flashPoint: "85\u00b0C",
    },
    status: "Closed",
  },
  {
    id: 19,
    name: "Lab T",
    city: "Tampa",
    cluster: "East Coast",
    availableEquipment: ["Spectrometer", "Xray"],
    fuelOilParameters: {
      viscosity: "33",
      sulfurContent: "0.7%",
      waterContent: "0.1%",
      flashPoint: "90\u00b0C",
    },
    status: "Under Maintenance",
  },
  {
    id: 20,
    name: "Lab U",
    city: "Cleveland",
    cluster: "Midwest",
    availableEquipment: ["DNA Sequencer", "Gas Chromatograph"],
    fuelOilParameters: {
      viscosity: "29",
      sulfurContent: "0.2%",
      waterContent: "0.3%",
      flashPoint: "100\u00b0C",
    },
    status: "Live",
  },
  {
    id: 21,
    name: "Lab V",
    city: "Orlando",
    cluster: "East Coast",
    availableEquipment: ["Centrifuge", "Microscope"],
    fuelOilParameters: {
      viscosity: "28",
      sulfurContent: "0.4%",
      waterContent: "0.1%",
      flashPoint: "110\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 22,
    name: "Lab W",
    city: "Sacramento",
    cluster: "West Coast",
    availableEquipment: ["PCR Machine", "Xray"],
    fuelOilParameters: {
      viscosity: "31",
      sulfurContent: "0.5%",
      waterContent: "0.2%",
      flashPoint: "95\u00b0C",
    },
    status: "Under Maintenance",
  },
  {
    id: 23,
    name: "Lab X",
    city: "Charlotte",
    cluster: "South",
    availableEquipment: ["Gas Chromatograph", "Ultrasound"],
    fuelOilParameters: {
      viscosity: "27",
      sulfurContent: "0.3%",
      waterContent: "0.1%",
      flashPoint: "85\u00b0C",
    },
    status: "Live",
  },
  {
    id: 24,
    name: "Lab Y",
    city: "Indianapolis",
    cluster: "Midwest",
    availableEquipment: ["Autoclave", "DNA Sequencer"],
    fuelOilParameters: {
      viscosity: "29",
      sulfurContent: "0.4%",
      waterContent: "0.2%",
      flashPoint: "90\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 25,
    name: "Lab Z",
    city: "Las Vegas",
    cluster: "West",
    availableEquipment: ["Spectrometer", "Centrifuge"],
    fuelOilParameters: {
      viscosity: "30",
      sulfurContent: "0.7%",
      waterContent: "0.1%",
      flashPoint: "110\u00b0C",
    },
    status: "Live",
  },
  {
    id: 26,
    name: "Lab [",
    city: "Columbus",
    cluster: "Midwest",
    availableEquipment: ["Xray", "Microscope"],
    fuelOilParameters: {
      viscosity: "28",
      sulfurContent: "0.3%",
      waterContent: "0.2%",
      flashPoint: "85\u00b0C",
    },
    status: "Under Maintenance",
  },
  {
    id: 27,
    name: "Lab \\",
    city: "Baltimore",
    cluster: "East Coast",
    availableEquipment: ["DNA Sequencer", "Ultrasound"],
    fuelOilParameters: {
      viscosity: "33",
      sulfurContent: "0.5%",
      waterContent: "0.1%",
      flashPoint: "95\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 28,
    name: "Lab ]",
    city: "Memphis",
    cluster: "South",
    availableEquipment: ["Gas Chromatograph", "PCR Machine"],
    fuelOilParameters: {
      viscosity: "30",
      sulfurContent: "0.6%",
      waterContent: "0.2%",
      flashPoint: "100\u00b0C",
    },
    status: "Closed",
  },
  {
    id: 29,
    name: "Lab ^",
    city: "Salt Lake City",
    cluster: "Mountain",
    availableEquipment: ["Xray", "Centrifuge"],
    fuelOilParameters: {
      viscosity: "28",
      sulfurContent: "0.4%",
      waterContent: "0.3%",
      flashPoint: "80\u00b0C",
    },
    status: "Live",
  },
  {
    id: 30,
    name: "Lab _",
    city: "Kansas City",
    cluster: "Midwest",
    availableEquipment: ["Autoclave", "Gas Chromatograph"],
    fuelOilParameters: {
      viscosity: "31",
      sulfurContent: "0.2%",
      waterContent: "0.1%",
      flashPoint: "95\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 31,
    name: "Lab `",
    city: "St. Louis",
    cluster: "Midwest",
    availableEquipment: ["DNA Sequencer", "Microscope"],
    fuelOilParameters: {
      viscosity: "27",
      sulfurContent: "0.5%",
      waterContent: "0.2%",
      flashPoint: "100\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 32,
    name: "Lab a",
    city: "Cincinnati",
    cluster: "Midwest",
    availableEquipment: ["PCR Machine", "Spectrometer"],
    fuelOilParameters: {
      viscosity: "29",
      sulfurContent: "0.3%",
      waterContent: "0.1%",
      flashPoint: "110\u00b0C",
    },
    status: "Live",
  },
  {
    id: 33,
    name: "Lab b",
    city: "Pittsburgh",
    cluster: "East Coast",
    availableEquipment: ["Gas Chromatograph", "Xray"],
    fuelOilParameters: {
      viscosity: "34",
      sulfurContent: "0.4%",
      waterContent: "0.3%",
      flashPoint: "85\u00b0C",
    },
    status: "Under Maintenance",
  },
  {
    id: 34,
    name: "Lab c",
    city: "Milwaukee",
    cluster: "Midwest",
    availableEquipment: ["Ultrasound", "Centrifuge"],
    fuelOilParameters: {
      viscosity: "30",
      sulfurContent: "0.6%",
      waterContent: "0.1%",
      flashPoint: "90\u00b0C",
    },
    status: "Live",
  },
  {
    id: 35,
    name: "Lab d",
    city: "Raleigh",
    cluster: "South",
    availableEquipment: ["Autoclave", "Spectrometer"],
    fuelOilParameters: {
      viscosity: "32",
      sulfurContent: "0.2%",
      waterContent: "0.2%",
      flashPoint: "110\u00b0C",
    },
    status: "Closed",
  },
  {
    id: 36,
    name: "Lab e",
    city: "Richmond",
    cluster: "East Coast",
    availableEquipment: ["DNA Sequencer", "Ultrasound"],
    fuelOilParameters: {
      viscosity: "29",
      sulfurContent: "0.3%",
      waterContent: "0.1%",
      flashPoint: "95\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 37,
    name: "Lab f",
    city: "Louisville",
    cluster: "South",
    availableEquipment: ["PCR Machine", "Gas Chromatograph"],
    fuelOilParameters: {
      viscosity: "31",
      sulfurContent: "0.5%",
      waterContent: "0.2%",
      flashPoint: "100\u00b0C",
    },
    status: "Operational",
  },
  {
    id: 38,
    name: "Lab g",
    city: "Buffalo",
    cluster: "East Coast",
    availableEquipment: ["Xray", "Microscope"],
    fuelOilParameters: {
      viscosity: "28",
      sulfurContent: "0.7%",
      waterContent: "0.3%",
      flashPoint: "110\u00b0C",
    },
    status: "Live",
  },
  {
    id: 39,
    name: "Lab h",
    city: "Oklahoma City",
    cluster: "Midwest",
    availableEquipment: ["Centrifuge", "DNA Sequencer"],
    fuelOilParameters: {
      viscosity: "27",
      sulfurContent: "0.4%",
      waterContent: "0.2%",
      flashPoint: "95\u00b0C",
    },
    status: "Under Maintenance",
  },
];

const status = [
  {
    value: "Live",
    label: "Live",
  },
  {
    value: "Under Maintenance",
    label: "Under Maintenance",
  },
];
export { data, status };
