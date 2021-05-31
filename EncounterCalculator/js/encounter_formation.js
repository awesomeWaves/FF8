// Danger Table
const rndValue = [
    7, 182, 240,  31,  85,  91,  55, 227, 174,  79, 178,  94, 153, 246, 119, 203,
    96, 143, 67, 62, 167, 76, 45, 136, 199, 104, 215, 209, 194, 242, 193, 221,
   170, 147,  22, 247,  38,   4,  54, 161,  70,  78,  86, 190, 108, 110, 128, 213,
   181, 142, 164, 158, 231, 202, 206,  33, 255,  15, 212, 140, 230, 211, 152,  71,
   244,  13,  21, 237, 196, 228,  53, 120, 186, 218,  39,  97, 171, 185, 195, 125,
   133, 252, 149, 107,  48, 173, 134,   0, 141, 205, 126, 159, 229, 239, 219,  89,
   235,   5,  20, 201,  36,  44, 160,  60,  68, 105,  64, 113, 100,  58, 116, 124,
   132,  19, 148, 156, 150, 172, 180, 188,   3, 222,  84, 220, 197, 216,  12, 183,
    37,  11,   1,  28,  35,  43,  51,  59, 151,  27,  98,  47, 176, 224, 115, 204,
     2,  74, 254, 155, 163, 109,  25,  56, 117, 189, 102, 135,  63, 175, 243, 251,
   131,  10,  18,  26,  34,  83, 144, 207, 122, 139,  82,  90,  73, 106, 114,  40,
    88, 138, 191,  14,   6, 162, 253, 250,  65, 101, 210,  77, 226,  92,  29,  69,
    30,   9,  17, 179,  95,  41, 121,  57,  46,  42,  81, 217,  93, 166, 234,  49,
   129, 137,  16, 103, 245, 169,  66, 130, 112, 157, 146,  87, 225,  61, 241, 249,
   238,   8, 145,  24,  32, 177, 165, 187, 198,  72,  80, 154, 214, 127, 123, 233,
   118, 223,  50, 111,  52, 168, 208, 184,  99, 200, 192, 236,  75, 232,  23, 248,
]

const prevEncFormationInput = document.getElementById("prev-enc-formation");
const prevEncNumberInput = document.getElementById("prev-enc-number");
const submitButton = document.getElementById('submit-button');
const resultsDiv = document.getElementById('results');

const mapFormationNumber = [1,2,3,4];

const nextEncFormation = (a) => {
    if ( rndValue[a] < 128 ) {
        resultFormation = mapFormationNumber[0];
    } else if ( rndValue[a] < 192 ) {
        resultFormation = mapFormationNumber[1];
        } else if ( rndValue[a] < 240 ) {
        resultFormation = mapFormationNumber[2];
    } else {
        resultFormation = mapFormationNumber[3];
    }
}

submitButton.addEventListener ('click', () => {
    if (prevEncNumberInput.value === "") {
        alert("Enter a previous encounter number")
    } else {    
        const result = nextEncFormation(parseInt(prevEncNumberInput.value));
        resultsDiv.innerHTML = `<h1>Formation ${resultFormation}</h1>`
    }
});


