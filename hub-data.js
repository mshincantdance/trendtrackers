// hub-data.js — Trend Trackers Student Hub

const SIGNALS = [
  "Numbers that have big swings around the mean or average",
  "One or two numbers that are WAY higher or lower than the rest",
  "Positive Association",
  "Negative Association",
  "Weird data",
  "There is no trend in the data (I can't figure out what it's trying to say)",
  "Data looks different depending on the years",
  "Surprising data that contradicts my prior",
  "I am comparing two groups that are different sizes",
  "There's a HUGE difference between groups I'm comparing",
  "I found data / a number that I can't explain"
];

const RULES = [
  { num: "01", text: "Messy is the method. Chaos means you're doing real work." },
  { num: "02", text: "Dead ends are data too. Not finding what you want is still finding something." },
  { num: "03", text: "Ctrl+F is your best friend. Hunt for what you need — don't read everything and hope it appears." },
  { num: "04", text: "Sharpen the question, don't swap it. Your research question will change — revise it, don't escape it." },
  { num: "05", text: "The data speaks. Follow the evidence. Don't decide the answer first. There is no taboo in data." }
];

const TEAMS = {
  archer: {
    id: 'archer', emoji: '🏛️', name: 'Archer',
    members: 'Solo researcher', topic: "UGA's impact on Athens-Clarke County",
    color: 'amber',
    question: {
      current: "Does UGA's tax-exempt property reduce affordable housing in Clarke County?",
      nextRevision: 5,
      revisions: [
        { day: "Day 1", label: "Start",  text: "Why does Athens have so much poverty despite UGA?", note: "Too broad — couldn't be answered by one dataset" },
        { day: "Day 2", label: "Rev 1",  text: "How much land does UGA own in Clarke County?", note: "More specific, but doesn't connect to community impact yet" },
        { day: "Day 4", label: "Rev 2",  text: "Does UGA's tax-exempt property reduce affordable housing in Clarke County?", note: "Current · specific, measurable, honest about correlation", current: true }
      ]
    },
    links: [
      { label: "Clarke County Tax Assessor", desc: "Parcel-level land ownership — search 'University of Georgia'", url: "https://www.qpublic.net/ga/clarke", team: true },
      { label: "UGA Fact Book", desc: "Campus acreage and facilities — look under 'Campus & Facilities'", url: "https://oir.uga.edu/factbook", team: true },
      { label: "Georgia Dept. of Revenue — TAP", desc: "Tax-exempt property records statewide", url: "https://gtc.georgia.gov/taxes/tax-exemptions", team: true },
      { label: "Athens Housing Authority", desc: "Housing data — vacancies, affordability, waitlists", url: "https://www.athenshousingauthority.net", team: true },
    ],
    athens: [
      { label: "Kids Count Data Center", desc: "County-level child outcome data", url: "https://datacenter.aecf.org/" },
      { label: "Census Reporter", desc: "Income, demographics, housing by county", url: "https://censusreporter.org/" },
      { label: "ACC Open Data Portal", desc: "Official Athens-Clarke County open data", url: "https://data-athensclarke.opendata.arcgis.com" },
    ],
    general: [
      { label: "County Health Rankings", desc: "Health outcomes by county", url: "https://www.countyhealthrankings.org/" },
      { label: "FRED — St. Louis Fed", desc: "Economic data by county over time", url: "https://fred.stlouisfed.org/" },
    ],
    checklist: [
      { text: "Research question locked", done: true },
      { text: "Dataset found + URL saved", done: true },
      { text: "Mean & median calculated", done: false },
      { text: "SD calculated", done: false },
      { text: "Box plot built", done: false },
      { text: "Scatter plot built", done: false },
      { text: "Correlation vs causation addressed", done: false },
      { text: "Three-part claim written", done: false },
      { text: "Infographic drafted", done: false },
      { text: "Individual reflection complete", done: false },
    ]
  },

  'julia-peter': {
    id: 'julia-peter', emoji: '💊', name: 'Julia + Peter',
    members: 'Substance use', topic: 'Substance use and youth in Clarke County',
    color: 'blue',
    question: {
      current: "Is there a connection between youth substance use rates and income levels in Clarke County?",
      nextRevision: 5,
      revisions: [
        { day: "Day 1", label: "Start",  text: "Why do kids in Athens use drugs?", note: "Too broad — assumes causation before any data" },
        { day: "Day 2", label: "Rev 1",  text: "How does substance use in Clarke County compare to Georgia?", note: "Better, but doesn't connect to a specific variable yet" },
        { day: "Day 4", label: "Rev 2",  text: "Is there a connection between youth substance use rates and income levels in Clarke County?", note: "Current · specific, measurable, honest about correlation", current: true }
      ]
    },
    links: [
      { label: "Georgia Student Health Survey", desc: "Youth substance use by county — filter by Clarke", url: "https://dph.georgia.gov/georgia-student-health-survey", team: true },
      { label: "Georgia DPH OASIS", desc: "GA public health data — search 'substance' under county profiles", url: "https://oasis.state.ga.us", team: true },
      { label: "SAMHSA", desc: "State and county substance use estimates — filter by Georgia", url: "https://www.samhsa.gov/data", team: true },
      { label: "ACC Community Health Assessment", desc: "Local health needs — may have neighborhood breakdowns", url: "https://www.athensclarkecounty.com/2518/Community-Health-Assessment", team: true },
    ],
    athens: [
      { label: "Kids Count Data Center", desc: "County-level child outcome data", url: "https://datacenter.aecf.org/" },
      { label: "Census Reporter", desc: "Income, demographics by county", url: "https://censusreporter.org/" },
      { label: "GOSA — GA Student Achievement", desc: "Discipline, attendance, graduation data", url: "https://gosa.georgia.gov/downloadable-data" },
    ],
    general: [
      { label: "CDC YRBSS", desc: "National youth risk behavior data — use for comparison", url: "https://www.cdc.gov/yrbs" },
      { label: "County Health Rankings", desc: "Health outcomes and behaviors by county", url: "https://www.countyhealthrankings.org/" },
    ],
    checklist: [
      { text: "Research question locked", done: true },
      { text: "Dataset found + URL saved", done: true },
      { text: "Mean & median calculated", done: true },
      { text: "SD calculated", done: false },
      { text: "Box plot built", done: false },
      { text: "Scatter plot built", done: false },
      { text: "Correlation vs causation addressed", done: false },
      { text: "Three-part claim written", done: false },
      { text: "Infographic drafted", done: false },
      { text: "Individual reflection complete", done: false },
    ]
  },

  'rose-zuzu': {
    id: 'rose-zuzu', emoji: '🏘️', name: 'Rose + Zuzu',
    members: 'East/West divide', topic: 'East side vs. West side disparities in Athens',
    color: 'rose',
    question: {
      current: "Do Cedar Shoals and Clarke Central show different graduation rates, and does neighborhood income predict the gap?",
      nextRevision: 5,
      revisions: [
        { day: "Day 1", label: "Start",  text: "Why is the east side of Athens poorer than the west side?", note: "Too vague — 'poorer' needs a measurable definition" },
        { day: "Day 2", label: "Rev 1",  text: "Do east side schools have lower graduation rates than west side schools?", note: "More specific, but needs an explanatory variable" },
        { day: "Day 4", label: "Rev 2",  text: "Do Cedar Shoals and Clarke Central show different graduation rates, and does neighborhood income predict the gap?", note: "Current · specific, measurable, honest about correlation", current: true }
      ]
    },
    links: [
      { label: "GOSA Downloadable Data", desc: "School-level data for Clarke County", url: "https://bit.ly/gosa-dd", team: true },
      { label: "NCES School Search", desc: "Federal school-level data — search Cedar Shoals or Clarke Central", url: "https://nces.ed.gov/ccd/schoolsearch", team: true },
      { label: "Georgia DOE Report Cards", desc: "Official state report cards — graduation, attendance", url: "https://www.gadoe.org/External-Affairs-and-Policy/communications/Pages/Report-Cards.aspx", team: true },
      { label: "College Board AP Data", desc: "AP exam participation and pass rates by school", url: "https://research.collegeboard.org/programs/ap/data", team: true },
    ],
    athens: [
      { label: "Kids Count Data Center", desc: "County-level child outcome data", url: "https://datacenter.aecf.org/" },
      { label: "Census Reporter", desc: "Neighborhood income and education data", url: "https://censusreporter.org/" },
      { label: "GOSA — GA Student Achievement", desc: "Discipline, attendance, graduation data", url: "https://gosa.georgia.gov/downloadable-data" },
    ],
    general: [
      { label: "Data USA — Athens", desc: "Income, employment, poverty, race, education", url: "https://datausa.io/profile/geo/athens-clarke-county-ga" },
      { label: "County Health Rankings", desc: "Health outcomes by county", url: "https://www.countyhealthrankings.org/" },
    ],
    checklist: [
      { text: "Research question locked", done: true },
      { text: "Dataset found + URL saved", done: true },
      { text: "Mean & median calculated", done: true },
      { text: "SD calculated", done: true },
      { text: "Box plot built", done: false },
      { text: "Scatter plot built", done: false },
      { text: "Correlation vs causation addressed", done: false },
      { text: "Three-part claim written", done: false },
      { text: "Infographic drafted", done: false },
      { text: "Individual reflection complete", done: false },
    ]
  },

  'wyatt-ora': {
    id: 'wyatt-ora', emoji: '🌿', name: 'Wyatt + Ora',
    members: 'Environment', topic: 'CO₂ emissions and water quality in Athens',
    color: 'green',
    question: {
      current: "Does GHG output vary with county income in Georgia, and what does that mean for Clarke County?",
      nextRevision: 5,
      revisions: [
        { day: "Day 1", label: "Start",  text: "Why is carbon emissions increasing?", note: "Too broad — dataset couldn't answer this" },
        { day: "Day 2", label: "Rev 1",  text: "Do richer Georgia counties pollute more?", note: "Better! But 'richer' needs a measurable definition" },
        { day: "Day 4", label: "Rev 2",  text: "Does GHG output vary with county income in Georgia, and what does that mean for Clarke County?", note: "Current · specific, measurable, honest about correlation", current: true }
      ]
    },
    links: [
      { label: "Georgia Adopt a Stream", desc: "Citizen-collected water quality data by county/watershed", url: "https://adoptastream.georgia.gov", team: true, sub: "🍄 Ora" },
      { label: "USGS Water Quality Portal", desc: "Filter by State: GA, County: Clarke", url: "https://www.waterqualitydata.us", team: true, sub: "🍄 Ora" },
      { label: "Georgia EPD Watershed Protection", desc: "State water quality monitoring data", url: "https://epd.georgia.gov/watershed-protection-branch", team: true, sub: "🍄 Ora" },
      { label: "Athens Transit", desc: "Local routes, coverage, schedules — look for annual reports", url: "https://www.athenstransit.com", team: true, sub: "🚂 Wyatt" },
      { label: "National Transit Database", desc: "Ridership and efficiency — filter by GA, search Athens", url: "https://www.transit.dot.gov/ntd/ntd-data", team: true, sub: "🚂 Wyatt" },
      { label: "Drawdown Georgia (Georgia Tech)", desc: "County-level GHG emissions monthly since 2005", url: "https://drawdownga.gatech.edu", team: true, sub: "🚂 Wyatt" },
    ],
    athens: [
      { label: "Kids Count Data Center", desc: "County-level child outcome data", url: "https://datacenter.aecf.org/" },
      { label: "GeorgiaData.org", desc: "All 159 GA counties — demographics, economics, environment", url: "https://georgiadata.org" },
      { label: "ACC Open Data Portal", desc: "Official Athens-Clarke County open data", url: "https://data-athensclarke.opendata.arcgis.com" },
    ],
    general: [
      { label: "Our World in Data — Transport", desc: "CO₂ by transport mode — good for so-what framing", url: "https://ourworldindata.org/travel-carbon-footprint" },
      { label: "EPA ECHO", desc: "Water quality violations by location — search by county", url: "https://echo.epa.gov" },
    ],
    checklist: [
      { text: "Research question locked", done: true },
      { text: "Dataset found + URL saved", done: true },
      { text: "Mean & median calculated", done: false },
      { text: "SD calculated", done: false },
      { text: "Box plot built", done: false },
      { text: "Scatter plot built", done: false },
      { text: "Correlation vs causation addressed", done: false },
      { text: "Three-part claim written", done: false },
      { text: "Infographic drafted", done: false },
      { text: "Individual reflection complete", done: false },
    ]
  }
};

const PROTOCOLS = {
  1: { title: "I can't find the data I'm looking for", text: "Try changing the word. \"Poverty\" might be listed as \"economic disadvantage\" or \"SNAP recipients.\" \"Crime\" might be \"disciplinary incidents\" or \"juvenile arrests.\" Write down 3 different words for the same thing and search each one. If you've tried 3 different words and still nothing, use the Still Stuck section below.", page: 1 },
  2: { title: "The data only shows Georgia or a huge region — not my county", text: "Log it as a Type 2 dead end on your dead ends sheet. Then ask: is there a smaller unit I can look for? Georgia → county → school. If the smallest unit available is still too big, that is your finding — write it down. Your dead end tells a story about what data is missing and why.", page: 1 },
  3: { title: "I don't know where to look", text: "Go to your team links first. If nothing fits, go to the General Sources on your hub. If still nothing after checking both — write your research question and wait for a conference. Don't click randomly for more than 5 minutes. Wandering wastes time.", page: 1 },
  4: { title: "I can't figure out how to use the website or filter", text: "Use Ctrl+F to search for your county name on the page. Look for dropdown filters before reading anything. If you're still lost after 3 minutes, screenshot exactly where you are and flag Ms. Shin — don't close the tab.", page: 1 },
  5: { title: "I found the data but now I can't find it again", text: "This means the URL didn't get saved. From now on: find it → copy the URL → paste it somewhere safe → then read it. In that order, every time. Go back and see if you saved anything that might lead you back to it.", page: 2 },
  6: { title: "The data exists but not at the level I need", text: "Log it as a Type 2 dead end. Ask: what's the closest level that does exist? Use that and note the limitation in your research journal. Write exactly what level was available and what level you needed. This is not a failure — naming the gap is part of your analysis.", page: 2 },
  7: { title: "I found a number but I don't know if it's useful", text: "Ask these three questions: (1) What exactly does this number count? (2) Who collected it and why? (3) Does it go up or down compared to another county or year? If you can answer all three, it's useful. If you can't answer even one — flag it for a conference and move on.", page: 2 },
  8: { title: "My research question is too vague — I don't know what to search", text: "Go back to your Translation Table. Look at Column 3 — \"what can be measured.\" Pick one specific thing from that list and search only that. One concrete thing at a time. If your Column 3 is also vague, that's what to work on before anything else.", page: 2 }
};

const TEACHER_EMAIL = 'slaw@doublehelixschool.com';
const CURRENT_DAY = 3;
const TOTAL_DAYS = 15;

Object.assign(window, { SIGNALS, RULES, TEAMS, PROTOCOLS, TEACHER_EMAIL, CURRENT_DAY, TOTAL_DAYS });
