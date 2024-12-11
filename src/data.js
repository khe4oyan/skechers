const data = {
  soleMaterials: ["Vinil", "Etil", "Acetat"],

  shoesPeculiarities: [
    "harmaravetutyun",
    "tetevutyun",
    "chqrtnacnelu hatkutyun",
    "lvanalu hatkutyun",
    "takacuneri arandznahatkutyun",
    "chkunutyun",
  ],

  soleVariants: {
    general: [
      {
        name: "Slip-ins",
        description: "Arandz ognutyan hagnelu hnaravorutyun",
      },
      {
        name: "Arch Fit",
        description: "Hartatatutyan hamar (miqich bardzr mejtexi mas)",
      },
      {
        name: "Collabs",
        description: "Snoop Dog, Doja Cat, Roling Stones, Eshly Park",
      },
    ],

    professional: {
      insoles: ["Goga mat", "Goga max"],
      shoes: [
        {
          name: "Hyper Burst",
          description: "3 shert (xit, mijin, papuk)",
        },
        {
          name: "GoRun",
          description:
            "Vazqi hamar (dem hetev fiksatrov, vory apahovuma patasxanayin skhematutyun u komfort vazqi jamanak)",
        },
        {
          name: "GoWalk",
          description: "Hyper Pillars (zspanakutyun) u sovorakan",
        },
        {
          name: "Massage Fit",
          description: "Massagi effect",
        },
        {
          name: "Max Cushion",
          description: "Vakuum",
        },
        {
          name: "Swirl Tech",
          description:
            "Takacui mej ancqer kan vori shnorhiv apahovuma zspanakutyuny",
        },
      ],
    },

    casual: {
      insoles: ["Memory Foam", "Air Cooled", "Relaxed Fit", "Classic Fit"],
      shoes: [
        {
          name: "Mark Nelson",
          description: "Dizayner",
        },
        {
          name: "Sketch Air (Street)",
          description: "Takacumneri meji pak odi arkayutyuny",
        },
        {
          name: "BOBS",
          description: "Baregorcutyan tarberak",
        },
        {
          name: "Delux",
          description: "Voch professional vazqi/qayli hamar",
        },
        {
          name: "GoodYear",
          description: "Anvadoxi firmai takacuner",
        },
        {
          name: "5 Gen",
          description: "Veramshakvaca 5 angam",
        },
        {
          name: "O'Lites",
          description: "Memory Foam, arorya",
        },
        {
          name: "Go Trail",
          description: "",
        },
      ],
    },
  },

  shoesSizes: {
    infant: {
      range: [21, 26],
      description: "From 0 to 2 years",
    },
    kids: {
      range: [27, 37],
      description: "From 2 to 12 years",
    },
    male: {
      range: [39.5, 47.5, 50],
      description: "Male sizes",
    },
    female: {
      range: [35, 43],
      description: "Female sizes",
    },
  },
};

export default data;
