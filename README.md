**Assessment of changes in the Sundarbans Mangroves using Earth Observation data with the help Google Earth Engine**

Mangrove forests are generally found in the intertidal coastlines of tropical and subtropical latitudes which occupy approximately 137,760 km2 (Sarmistha Halder, 2021). Bangladesh, India, Pakistan, and Sri Lanka have the major mangrove distribution in South Asia. India has about 3.3% of the total Mangroves found, out of which Sundarbans is the largest continuous mangrove known which lies in the eastern coast of India. (RAHA A.K, 2014) It has global priority for biodiversity conservation and provides essential ecosystem services such as various products and storm surge protection. Understanding this significance of the Sundarbans it is important to analyse the spatial temporal changes of the forest over the past years and make effective planning and decision making to conserve the forest. The Sundarbans, which are currently 2 m above mean sea level, are threatened by inundation and eventual wetland destruction, with global mean sea-level rise estimated to be up to 0.98 m or greater by 2100 compared to the baseline era (1985–2005) (Payo, 2016); however, the extent of loss is unknown. Remote sensing techniques and satellite image processing methods helps in handling large volume of satellite datasets which can help in monitoring the Mangrove change (Thakur, Maity, Mondal, Basumatary, & Ghosh, 2021). This paper focus on using Earth Observation data for change assessment using Google Earth Engine to investigate the potential effects of the sea-level rise and change in vegetation cover on the Sundarbans.


This repo contains two GEE js files

1. classification - In this file, indian sunderbans region in classified into 5 classes: DeepWater, ShallowWater, Dense Mangrovesn Sparse Mangroves and mud flats. Comparision between 1990 and 2020 has been observed
2. sunderbans -  In this file Binary images of NDWI and NDVI of given region has been created with time gap of 5 years from 1990 to 2020. Difference between NDWI and NDVI changes has been also observed. Time series graph of change from 1990 to 2020 also has been created.

**NOTE: add 'mangrove_india.zip" as an asset in your GEE repo and Replace shapefile address with 'Region' in the both codes**



*References*

Payo, A. &amp;. (2016). Projected changes in area of the Sundarban mangrove forest in Bangladesh due to SLR by 2100. ClimaticChange.

Pimple, U., Simonetti, D., &amp; Sitthi, A. (2017). Google Earth Engine Based Three Decadal Landsat Imagery Analysis for Mapping of Mangrove Forests and Its Surroundings in the Trat Province of Thailand. Journal of Computer and Communications.

RAHA A.K, M. A. (2014). SEA LEVEL RISE AND SUBMERGENCE OF SUNDARBAN ISLANDS : A TIME SERIES STUDY . Journal of Ecology and Environmental Sciences.
Sarmistha Halder, K. S. (2021). Monitoring the inter-decade spatial–temporal dynamics of the Sundarban mangrove forest of India from 1990 to 2019. Regional Studies in Marine Science,8.

Subbarayan, S. &amp;. (2018). Utility of Landsat Data for Assessing Mangrove Degradation in Muthupet Lagoon, South India.

Thakur, S. &amp;., Maity, D. &amp;., Mondal, I. &amp;., Basumatary, G. &amp;., &amp; Ghosh, P. (2021). Assessment of changes in land use, land cover, and land surface temperature in the mangrove forest of Sundarbans, northeast coast of India. Environment, Development and Sustainability.
