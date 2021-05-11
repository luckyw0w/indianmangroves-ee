var Region = ee.FeatureCollection("users/tobishivang/mangrove_india"),
    DeepWater = 
    /* color: #485dd6 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[88.60297881588446, 21.560020214830907],
                  [88.60297881588446, 21.549802205772732],
                  [88.61396514400946, 21.549802205772732],
                  [88.61396514400946, 21.560020214830907]]], null, false),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.21066009029852, 21.6130145761357],
                  [89.21066009029852, 21.602161888955493],
                  [89.22301970943914, 21.602161888955493],
                  [89.22301970943914, 21.6130145761357]]], null, false),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.4132205151032, 21.648120630009764],
                  [89.4132205151032, 21.641738345652318],
                  [89.44549285397039, 21.641738345652318],
                  [89.44549285397039, 21.648120630009764]]], null, false),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.83231841549383, 21.538944782590686],
                  [88.83231841549383, 21.5338351259414],
                  [88.84605132565008, 21.5338351259414],
                  [88.84605132565008, 21.538944782590686]]], null, false),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.15847503170477, 21.65258806118029],
                  [89.15847503170477, 21.64556775012193],
                  [89.16328155025946, 21.64556775012193],
                  [89.16328155025946, 21.65258806118029]]], null, false),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.50591765865789, 21.690236627140045],
                  [89.50591765865789, 21.68449426105711],
                  [89.51484405025946, 21.68449426105711],
                  [89.51484405025946, 21.690236627140045]]], null, false),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.72770415768133, 21.775706975495037],
                  [89.72770415768133, 21.767417303102608],
                  [89.73457061275946, 21.767417303102608],
                  [89.73457061275946, 21.775706975495037]]], null, false),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.19785796627508, 21.48847904759035],
                  [88.19785796627508, 21.4718662412861],
                  [88.22257720455633, 21.4718662412861],
                  [88.22257720455633, 21.48847904759035]]], null, false),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.36539947018133, 21.56129741534652],
                  [88.36539947018133, 21.54724759104632],
                  [88.38737212643133, 21.54724759104632],
                  [88.38737212643133, 21.56129741534652]]], null, false),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.16764556393133, 21.554911300279958],
                  [88.16764556393133, 21.54597026681675],
                  [88.17863189205633, 21.54597026681675],
                  [88.17863189205633, 21.554911300279958]]], null, false),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.72520171627508, 21.558743003065963],
                  [88.72520171627508, 21.55363404352271],
                  [88.7375613354157, 21.55363404352271],
                  [88.7375613354157, 21.558743003065963]]], null, false),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.91746245846258, 21.558743003065963],
                  [88.91746245846258, 21.554911300279958],
                  [88.9298220776032, 21.554911300279958],
                  [88.9298220776032, 21.558743003065963]]], null, false),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.62058745846258, 21.69406474402957],
                  [89.62058745846258, 21.683856206253516],
                  [89.63432036861883, 21.683856206253516],
                  [89.63432036861883, 21.69406474402957]]], null, false),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.88975249752508, 21.820335433997748],
                  [89.88975249752508, 21.808860872655927],
                  [89.90485869869696, 21.808860872655927],
                  [89.90485869869696, 21.820335433997748]]], null, false),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.6713992260407, 21.723410258779083],
                  [89.6713992260407, 21.71703130812551],
                  [89.68101226315008, 21.71703130812551],
                  [89.68101226315008, 21.723410258779083]]], null, false),
            {
              "landcover": 0,
              "system:index": "14"
            })]),
    Creeks = 
    /* color: #4da8ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[89.28035460934149, 22.151742005334032],
                  [89.28035460934149, 22.148244164430693],
                  [89.28430282101141, 22.148244164430693],
                  [89.28430282101141, 22.151742005334032]]], null, false),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.41064559444891, 22.156988603688507],
                  [89.41064559444891, 22.155716719020212],
                  [89.41184722408758, 22.155716719020212],
                  [89.41184722408758, 22.156988603688507]]], null, false),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.3363162182282, 22.157624541711225],
                  [89.3363162182282, 22.15539874605676],
                  [89.3385478161286, 22.15539874605676],
                  [89.3385478161286, 22.157624541711225]]], null, false),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.34833251461492, 22.125824120817768],
                  [89.34833251461492, 22.123597822452318],
                  [89.35056411251531, 22.123597822452318],
                  [89.35056411251531, 22.125824120817768]]], null, false),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.74903468486865, 22.00779922956917],
                  [89.74903468486865, 22.00652600063309],
                  [89.75040797588427, 22.00652600063309],
                  [89.75040797588427, 22.00779922956917]]], null, false),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.84138850566943, 22.018462072913863],
                  [89.84138850566943, 22.01655236890634],
                  [89.84241847393115, 22.01655236890634],
                  [89.84241847393115, 22.018462072913863]]], null, false),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.69410304424365, 22.01814379070011],
                  [89.69410304424365, 22.013051178044787],
                  [89.69702128765185, 22.013051178044787],
                  [89.69702128765185, 22.01814379070011]]], null, false),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.3139149107196, 21.708212830963284],
                  [88.3139149107196, 21.707016672915508],
                  [88.3150307096698, 21.707016672915508],
                  [88.3150307096698, 21.708212830963284]]], null, false),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.29365886823913, 21.701514217859632],
                  [88.29365886823913, 21.7005572476844],
                  [88.29528965132019, 21.7005572476844],
                  [88.29528965132019, 21.701514217859632]]], null, false),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.54521106066345, 21.736978144121956],
                  [88.54521106066345, 21.73673896115342],
                  [88.54546855272888, 21.73673896115342],
                  [88.54546855272888, 21.736978144121956]]], null, false),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.5673313901311, 21.76493923880613],
                  [88.5673313901311, 21.761910148261638],
                  [88.56973464940845, 21.761910148261638],
                  [88.56973464940845, 21.76493923880613]]], null, false),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.92243227245599, 21.734612514136717],
                  [88.92243227245599, 21.73317738673249],
                  [88.92492136242181, 21.73317738673249],
                  [88.92492136242181, 21.734612514136717]]], null, false),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.95642122509271, 21.780210206768178],
                  [88.95642122509271, 21.778855239464846],
                  [88.9583095002392, 21.778855239464846],
                  [88.9583095002392, 21.780210206768178]]], null, false),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.99727663280756, 21.766978801781534],
                  [88.99727663280756, 21.766181690218893],
                  [88.9982207703808, 21.766181690218893],
                  [88.9982207703808, 21.766978801781534]]], null, false),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.94294580700189, 21.76036264167509],
                  [88.94294580700189, 21.759406063170992],
                  [88.94526323559076, 21.759406063170992],
                  [88.94526323559076, 21.76036264167509]]], null, false),
            {
              "landcover": 1,
              "system:index": "14"
            })]),
    DenseMangroves = 
    /* color: #2c683d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[88.99749120952875, 21.778137898650527],
                  [88.99749120952875, 21.777659669447512],
                  [88.99817785503656, 21.777659669447512],
                  [88.99817785503656, 21.778137898650527]]], null, false),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.95633539440423, 21.772000502797034],
                  [88.95633539440423, 21.771362836220508],
                  [88.957193701289, 21.771362836220508],
                  [88.957193701289, 21.772000502797034]]], null, false),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.98856481792718, 21.76729764516672],
                  [88.98856481792718, 21.766899090824516],
                  [88.98912271740228, 21.766899090824516],
                  [88.98912271740228, 21.76729764516672]]], null, false),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.84675422106255, 21.793239598840323],
                  [88.84675422106255, 21.792621950888577],
                  [88.84774127398003, 21.792621950888577],
                  [88.84774127398003, 21.793239598840323]]], null, false),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.19636570194533, 21.803824778539862],
                  [89.19636570194533, 21.803147408114892],
                  [89.19761024692824, 21.803147408114892],
                  [89.19761024692824, 21.803824778539862]]], null, false),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.1981061153253, 21.7895617674796],
                  [89.1981061153253, 21.789282822866138],
                  [89.19867474363646, 21.789282822866138],
                  [89.19867474363646, 21.7895617674796]]], null, false),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.6217663827989, 21.840637907078612],
                  [88.6217663827989, 21.838805486483558],
                  [88.62444859181379, 21.838805486483558],
                  [88.62444859181379, 21.840637907078612]]], null, false),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.27301491878976, 21.785403893047885],
                  [88.27301491878976, 21.780143550657066],
                  [88.27893723629464, 21.780143550657066],
                  [88.27893723629464, 21.785403893047885]]], null, false),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.95728368796719, 22.168115053909393],
                  [88.95728368796719, 22.166445834961475],
                  [88.95934362449063, 22.166445834961475],
                  [88.95934362449063, 22.168115053909393]]], null, false),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.14274215081893, 22.0610719617345],
                  [89.14274215081893, 22.058367354472992],
                  [89.146175378358, 22.058367354472992],
                  [89.146175378358, 22.0610719617345]]], null, false),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.35929158610038, 22.006582119721216],
                  [89.35929158610038, 22.005547613200033],
                  [89.3605361310833, 22.005547613200033],
                  [89.3605361310833, 22.006582119721216]]], null, false),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.74846824423449, 22.385196447799803],
                  [89.74846824423449, 22.3833710898004],
                  [89.75009902731554, 22.3833710898004],
                  [89.75009902731554, 22.385196447799803]]], null, false),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.73327621237414, 22.392815074727228],
                  [89.73327621237414, 22.391069176250372],
                  [89.73516448752062, 22.391069176250372],
                  [89.73516448752062, 22.392815074727228]]], null, false),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.70365041422409, 22.408429940797923],
                  [89.70365041422409, 22.40723969155825],
                  [89.70493787455123, 22.40723969155825],
                  [89.70493787455123, 22.408429940797923]]], null, false),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.52414232832268, 22.46699691816108],
                  [89.52414232832268, 22.465331269568622],
                  [89.52603060346917, 22.465331269568622],
                  [89.52603060346917, 22.46699691816108]]], null, false),
            {
              "landcover": 2,
              "system:index": "14"
            })]),
    SparseMangrove = 
    /* color: #29ff48 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[89.63302743659007, 21.90869962095364],
                  [89.63302743659007, 21.907604677259354],
                  [89.6341861508845, 21.907604677259354],
                  [89.6341861508845, 21.90869962095364]]], null, false),
            {
              "landcover": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.39303325755105, 22.18524274263654],
                  [89.39303325755105, 22.184447975789286],
                  [89.3937628184031, 22.184447975789286],
                  [89.3937628184031, 22.18524274263654]]], null, false),
            {
              "landcover": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.27696221164142, 22.203999315924463],
                  [89.27696221164142, 22.203433120630812],
                  [89.27759521296893, 22.203433120630812],
                  [89.27759521296893, 22.203999315924463]]], null, false),
            {
              "landcover": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.28436510852252, 22.201625253704226],
                  [89.28436510852252, 22.200850446465765],
                  [89.28530924609576, 22.200850446465765],
                  [89.28530924609576, 22.201625253704226]]], null, false),
            {
              "landcover": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.40836899569904, 22.2319188494697],
                  [89.40836899569904, 22.2310051711376],
                  [89.40927021792804, 22.2310051711376],
                  [89.40927021792804, 22.2319188494697]]], null, false),
            {
              "landcover": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.59220668052014, 22.331573064041176],
                  [89.59220668052014, 22.330779127503742],
                  [89.59289332602795, 22.330779127503742],
                  [89.59289332602795, 22.331573064041176]]], null, false),
            {
              "landcover": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.5925070879298, 22.328298046698823],
                  [89.5925070879298, 22.327682731830407],
                  [89.59312936042126, 22.327682731830407],
                  [89.59312936042126, 22.328298046698823]]], null, false),
            {
              "landcover": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.44584047755755, 22.34609852814421],
                  [89.44584047755755, 22.345711524964862],
                  [89.44635546168841, 22.345711524964862],
                  [89.44635546168841, 22.34609852814421]]], null, false),
            {
              "landcover": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.75181456760401, 22.370016984677576],
                  [89.75181456760401, 22.369183581142707],
                  [89.75293036655421, 22.369183581142707],
                  [89.75293036655421, 22.370016984677576]]], null, false),
            {
              "landcover": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.0890491319188, 22.080673665324078],
                  [89.0890491319188, 22.079878308304934],
                  [89.08973577742661, 22.079878308304934],
                  [89.08973577742661, 22.080673665324078]]], null, false),
            {
              "landcover": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.79754135595134, 22.044133006730686],
                  [88.79754135595134, 22.043098774446634],
                  [88.79827091680339, 22.043098774446634],
                  [88.79827091680339, 22.044133006730686]]], null, false),
            {
              "landcover": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.79599852175589, 22.049858750770763],
                  [88.79599852175589, 22.049222326785856],
                  [88.79672808260794, 22.049222326785856],
                  [88.79672808260794, 22.049858750770763]]], null, false),
            {
              "landcover": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.82037443728323, 22.039337499243466],
                  [88.82037443728323, 22.038999374216864],
                  [88.82063192934866, 22.038999374216864],
                  [88.82063192934866, 22.039337499243466]]], null, false),
            {
              "landcover": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.49522847886723, 21.575331847644595],
                  [88.49522847886723, 21.574832990835596],
                  [88.49571127648991, 21.574832990835596],
                  [88.49571127648991, 21.575331847644595]]], null, false),
            {
              "landcover": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.18586633517577, 21.5847620983753],
                  [88.18586633517577, 21.58427325054356],
                  [88.18629548861816, 21.58427325054356],
                  [88.18629548861816, 21.5847620983753]]], null, false),
            {
              "landcover": 3,
              "system:index": "14"
            })]),
    MudFlats = 
    /* color: #f5c971 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[88.34277580925365, 21.626358654140258],
                  [88.34277580925365, 21.62576023681356],
                  [88.34341953941723, 21.62576023681356],
                  [88.34341953941723, 21.626358654140258]]], null, false),
            {
              "landcover": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.35197001055423, 21.64592051131704],
                  [88.35197001055423, 21.64564128802282],
                  [88.35229187563601, 21.64564128802282],
                  [88.35229187563601, 21.64592051131704]]], null, false),
            {
              "landcover": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.48623636809177, 21.581248984722713],
                  [88.48623636809177, 21.58083993897319],
                  [88.48661187735385, 21.58083993897319],
                  [88.48661187735385, 21.581248984722713]]], null, false),
            {
              "landcover": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.50310186720857, 21.58506457973999],
                  [88.50310186720857, 21.58464556828896],
                  [88.50374559737214, 21.58464556828896],
                  [88.50374559737214, 21.58506457973999]]], null, false),
            {
              "landcover": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.52863792611667, 21.565646729966808],
                  [88.52863792611667, 21.5646489479574],
                  [88.52932457162449, 21.5646489479574],
                  [88.52932457162449, 21.565646729966808]]], null, false),
            {
              "landcover": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.58852511931569, 21.607734839851698],
                  [88.58852511931569, 21.606896946982953],
                  [88.5894263415447, 21.606896946982953],
                  [88.5894263415447, 21.607734839851698]]], null, false),
            {
              "landcover": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.33448863721401, 21.691713619106437],
                  [89.33448863721401, 21.690756583800454],
                  [89.33517528272182, 21.690756583800454],
                  [89.33517528272182, 21.691713619106437]]], null, false),
            {
              "landcover": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.33002544141323, 21.699449421034444],
                  [89.33002544141323, 21.698731683706225],
                  [89.33071208692104, 21.698731683706225],
                  [89.33071208692104, 21.699449421034444]]], null, false),
            {
              "landcover": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.64559620515536, 21.75678436904138],
                  [89.64559620515536, 21.755668332348513],
                  [89.6479994644327, 21.755668332348513],
                  [89.6479994644327, 21.75678436904138]]], null, false),
            {
              "landcover": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.54000617080032, 21.7681192698872],
                  [89.54000617080032, 21.766525055004927],
                  [89.54095030837357, 21.766525055004927],
                  [89.54095030837357, 21.7681192698872]]], null, false),
            {
              "landcover": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.82506121414544, 21.851856902099758],
                  [89.82506121414544, 21.850661941660892],
                  [89.82677782791497, 21.850661941660892],
                  [89.82677782791497, 21.851856902099758]]], null, false),
            {
              "landcover": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.84720553177239, 21.856955287676346],
                  [89.84720553177239, 21.8560790156049],
                  [89.84832133072258, 21.8560790156049],
                  [89.84832133072258, 21.856955287676346]]], null, false),
            {
              "landcover": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.8570760609472, 21.843093626821712],
                  [89.8570760609472, 21.842695283359646],
                  [89.85793436783196, 21.842695283359646],
                  [89.85793436783196, 21.843093626821712]]], null, false),
            {
              "landcover": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.27787103198632, 21.835266257714455],
                  [88.27787103198632, 21.833911811262794],
                  [88.27933015369042, 21.833911811262794],
                  [88.27933015369042, 21.835266257714455]]], null, false),
            {
              "landcover": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[88.31374825976953, 21.834389852651793],
                  [88.31374825976953, 21.834071158570023],
                  [88.31460656665429, 21.834071158570023],
                  [88.31460656665429, 21.834389852651793]]], null, false),
            {
              "landcover": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[89.07384660049195, 21.690016742283984],
                  [89.07384660049195, 21.689298957945155],
                  [89.07453324599976, 21.689298957945155],
                  [89.07453324599976, 21.690016742283984]]], null, false),
            {
              "landcover": 4,
              "system:index": "15"
            })]),
    L8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR"),
    L5 = ee.ImageCollection("LANDSAT/LT05/C01/T1_SR");

Map.centerObject(Region, 10);

function maskClouds(image) {
  
  // Bits 3 and 5 are cloud shadow and cloud, respectively.
    var cloudShadowBitMask = ee.Number(2).pow(3).int();
    var cloudsBitMask = ee.Number(2).pow(5).int();  
    
    // Get the pixel QA band.
    var qa = image.select('pixel_qa');
    
     // Both flags should be set to zero, indicating clear conditions.
    var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0).and(qa.bitwiseAnd(cloudsBitMask).eq(0)); 
  
  // Return the masked image, scaled to [0, 1].
  return image.updateMask(mask).divide(10000).copyProperties(image, ["system:time_start"]);
}

// ................L8 for 2020.........................................

var year = 2020; 

// Start date will be set one year before the central year
var startDate = (year-1)+'-01-01'; 

// End date will be set to one year later than the central year.
var endDate = (year+1)+'-12-31'; 
 
 
 var l8 = L8.filterDate(startDate,endDate)
// Mask for clouds and cloud shadows
    .map(maskClouds)
    

var composite = l8
              // Uses the median reducer
              .median() 
              // Clips the composite to our area of interest
              .clip(Region); 
              
              
//Select bands and parameters for visualization fcc
var visPar = {bands:['B5','B6','B4'], min: 0, max: 0.35}; 

// var visPar = {bands:['B5','B4','B3'], min: 0, max: 0.35}; 
//Add layer to map
Map.addLayer(composite.clip(Region), visPar, 'Landsat Composite 2020');

// ..............................RF Classification 2020...........................................................




var classes = DeepWater.merge(Creeks).merge(DenseMangroves).merge(SparseMangrove).merge(MudFlats);
var bands = ['B5','B6','B4'];

var image = composite.select(bands).clip(Region);

var samples = image.sampleRegions({
    collection: classes, // Set of geometries selected for training
    properties: ['landcover'], // Label from each geometry
    scale: 30 // Make each sample the same size as Landsat pixel
    }).randomColumn('random'); // creates a column with random numbers
    
var split = 0.8; // Roughly 80% for training, 20% for testing.
var training = samples.filter(ee.Filter.lt('random', split)); //Subset training data
var testing = samples.filter(ee.Filter.gte('random', split)); //Subset testing data

print('Samples n =', samples.aggregate_count('.all'));
print('Training n =', training.aggregate_count('.all'));
print('Testing n =', testing.aggregate_count('.all'));



 var classifier = ee.Classifier.smileRandomForest(100).train({ 
    features: training.select(['B5','B6','B4','landcover']), //Train using bands and landcover property
    classProperty: 'landcover', //Pull the landcover property from classes
    inputProperties: bands
    });
    
    
 var validation = testing.classify(classifier);
    var testAccuracy = validation.errorMatrix('landcover', 'classification');
    print('Validation error matrix RF: ', testAccuracy);
    print('Validation overall accuracy RF: ', testAccuracy.accuracy());
    
var classifiedrf_2020 = image.select(bands) // select the predictors
                      .classify(classifier); // .classify applies the Random Forest
                      
Map.addLayer (classifiedrf_2020, {min: 0, max: 4, palette: ['DarkBlue', '#4da8ff', 'DarkGreen','#29ff48','#f5c971']}, 'Classification 2020');

var names = ['DeepWater','ShallowWater','DenseMangroves','SparseMangrove','MudFlats'];
var count = classifiedrf_2020.eq([0,1,2,3,4]).rename(names);
var total = count.multiply(ee.Image.pixelArea().divide(1e6));
var area = total.reduceRegion({
  
  reducer:ee.Reducer.sum(),
  geometry:Region,
  scale:30,
 maxPixels: 1e9,
 bestEffort:true
});
var area_pxa2020 = ee.Number(area);
print ('Area of 2020:', area_pxa2020);

// .....................................................................................

// ................L5 for 1990................................
var bands = ['B4','B5','B3'];



var year = 1990; 

// Start date will be set one year before the central year
var startDate = (year-1)+'-01-01'; 

// End date will be set to one year later than the central year.
var endDate = (year+1)+'-12-31'; 
 
 
var l5 = L5.filterDate(startDate,endDate)
// Mask for clouds and cloud shadows
    .map(maskClouds)
    

var composite = l5
              // Uses the median reducer
              .median() 
              // Clips the composite to our area of interest
              .clip(Region); 
              
              
//Select bands and parameters for visualization fcc
var visPar = {bands:['B4','B5','B3'], min: 0, max: 0.35}; 

// var visPar = {bands:['B5','B4','B3'], min: 0, max: 0.35}; 
//Add layer to map
Map.addLayer(composite.clip(Region), visPar, 'Landsat Composite 1990');




var classes = DeepWater.merge(Creeks).merge(DenseMangroves).merge(SparseMangrove).merge(MudFlats);
var bands = ['B4','B5','B3'];

var image = composite.select(bands).clip(Region);

var samples = image.sampleRegions({
    collection: classes, // Set of geometries selected for training
    properties: ['landcover'], // Label from each geometry
    scale: 30 // Make each sample the same size as Landsat pixel
    }).randomColumn('random'); // creates a column with random numbers
    
var split = 0.8; // Roughly 80% for training, 20% for testing.
var training = samples.filter(ee.Filter.lt('random', split)); //Subset training data
var testing = samples.filter(ee.Filter.gte('random', split)); //Subset testing data

print('Samples n =', samples.aggregate_count('.all'));
print('Training n =', training.aggregate_count('.all'));
print('Testing n =', testing.aggregate_count('.all'));



 var classifier = ee.Classifier.smileRandomForest(100).train({ 
    features: training.select(['B4','B5','B3','landcover']), //Train using bands and landcover property
    classProperty: 'landcover', //Pull the landcover property from classes
    inputProperties: bands
    });
    
    
 var validation = testing.classify(classifier);
    var testAccuracy = validation.errorMatrix('landcover', 'classification');
    print('Validation error matrix RF: ', testAccuracy);
    print('Validation overall accuracy RF: ', testAccuracy.accuracy());
    
var classifiedrf_1990 = image.select(bands) // select the predictors
                      .classify(classifier); // .classify applies the Random Forest
                      
Map.addLayer (classifiedrf_1990, {min: 0, max: 4, palette: ['DarkBlue', '#4da8ff', 'DarkGreen','#29ff48','#f5c971']}, 'Classification 1990');


var names = ['DeepWater','ShallowWater','DenseMangroves','SparseMangrove','MudFlats'];
var count = classifiedrf_1990.eq([0,1,2,3,4]).rename(names);
var total = count.multiply(ee.Image.pixelArea().divide(1e6));
var area = total.reduceRegion({
  reducer:ee.Reducer.sum(),
  geometry:Region,
  scale:30,
 maxPixels: 1e9,
 bestEffort:true
});

var area_pxa1990 = ee.Number(area);
print ('Area of 1990:', area_pxa1990);





