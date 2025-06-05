// Generated from Sense.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SenseListener from './SenseListener.js';
import SenseVisitor from './SenseVisitor.js';

const serializedATN = [4,1,43,431,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,0,5,0,67,8,0,10,0,12,
0,70,9,0,1,0,1,0,1,0,1,0,5,0,76,8,0,10,0,12,0,79,9,0,1,0,1,0,1,1,1,1,1,1,
1,1,1,2,1,2,1,2,1,2,1,2,1,2,5,2,93,8,2,10,2,12,2,96,9,2,3,2,98,8,2,1,2,1,
2,1,3,1,3,1,3,1,3,1,3,1,4,5,4,108,8,4,10,4,12,4,111,9,4,1,4,3,4,114,8,4,
1,4,1,4,1,4,1,4,1,4,1,4,3,4,122,8,4,1,4,1,4,1,5,5,5,127,8,5,10,5,12,5,130,
9,5,1,5,1,5,1,5,3,5,135,8,5,1,5,1,5,1,5,1,5,1,5,1,6,5,6,143,8,6,10,6,12,
6,146,9,6,1,6,1,6,1,6,1,6,3,6,152,8,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,3,
8,162,8,8,1,9,1,9,1,9,1,9,5,9,168,8,9,10,9,12,9,171,9,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,4,12,187,8,12,11,12,12,
12,188,1,12,1,12,1,12,4,12,194,8,12,11,12,12,12,195,1,12,3,12,199,8,12,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,208,8,13,1,14,1,14,1,14,5,14,213,8,
14,10,14,12,14,216,9,14,1,15,1,15,1,15,1,15,1,15,3,15,223,8,15,1,16,1,16,
1,16,4,16,228,8,16,11,16,12,16,229,1,16,1,16,1,16,1,16,1,16,3,16,237,8,16,
1,17,1,17,1,17,5,17,242,8,17,10,17,12,17,245,9,17,1,18,1,18,1,18,3,18,250,
8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,259,8,19,1,20,1,20,1,20,1,20,
1,20,1,20,3,20,267,8,20,1,21,1,21,1,21,1,21,5,21,273,8,21,10,21,12,21,276,
9,21,3,21,278,8,21,1,21,1,21,1,22,1,22,1,22,1,22,5,22,286,8,22,10,22,12,
22,289,9,22,1,22,3,22,292,8,22,3,22,294,8,22,1,22,1,22,1,23,1,23,1,23,1,
23,1,24,1,24,4,24,304,8,24,11,24,12,24,305,1,24,1,24,1,24,4,24,311,8,24,
11,24,12,24,312,1,24,3,24,316,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,3,25,326,8,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,334,8,25,10,25,12,25,
337,9,25,1,25,1,25,3,25,341,8,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,
350,8,25,1,25,1,25,1,25,3,25,355,8,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,373,8,25,10,25,12,25,376,
9,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,384,8,25,1,26,1,26,1,26,5,26,389,
8,26,10,26,12,26,392,9,26,1,27,1,27,1,27,3,27,397,8,27,1,27,1,27,1,28,1,
28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,411,8,29,3,29,413,8,29,1,
29,1,29,3,29,417,8,29,1,29,3,29,420,8,29,1,30,1,30,3,30,424,8,30,1,31,4,
31,427,8,31,11,31,12,31,428,1,31,0,0,32,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,0,6,2,0,18,18,35,
37,2,0,35,35,37,37,2,0,33,33,37,37,2,0,33,33,35,35,1,0,22,23,2,0,35,35,38,
38,475,0,64,1,0,0,0,2,82,1,0,0,0,4,86,1,0,0,0,6,101,1,0,0,0,8,109,1,0,0,
0,10,128,1,0,0,0,12,144,1,0,0,0,14,155,1,0,0,0,16,158,1,0,0,0,18,163,1,0,
0,0,20,174,1,0,0,0,22,178,1,0,0,0,24,198,1,0,0,0,26,207,1,0,0,0,28,209,1,
0,0,0,30,217,1,0,0,0,32,236,1,0,0,0,34,238,1,0,0,0,36,246,1,0,0,0,38,258,
1,0,0,0,40,266,1,0,0,0,42,268,1,0,0,0,44,281,1,0,0,0,46,297,1,0,0,0,48,315,
1,0,0,0,50,383,1,0,0,0,52,385,1,0,0,0,54,396,1,0,0,0,56,400,1,0,0,0,58,419,
1,0,0,0,60,421,1,0,0,0,62,426,1,0,0,0,64,68,3,2,1,0,65,67,3,4,2,0,66,65,
1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,77,1,0,0,0,70,68,1,
0,0,0,71,76,3,6,3,0,72,76,3,8,4,0,73,76,3,10,5,0,74,76,3,12,6,0,75,71,1,
0,0,0,75,72,1,0,0,0,75,73,1,0,0,0,75,74,1,0,0,0,76,79,1,0,0,0,77,75,1,0,
0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,0,0,80,81,5,0,0,1,81,1,1,0,0,0,
82,83,5,1,0,0,83,84,3,56,28,0,84,85,5,2,0,0,85,3,1,0,0,0,86,87,5,3,0,0,87,
97,3,56,28,0,88,89,5,4,0,0,89,94,5,35,0,0,90,91,5,5,0,0,91,93,5,35,0,0,92,
90,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,98,1,0,0,0,96,94,
1,0,0,0,97,88,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,100,5,2,0,0,100,5,1,
0,0,0,101,102,5,34,0,0,102,103,5,6,0,0,103,104,5,42,0,0,104,105,5,2,0,0,
105,7,1,0,0,0,106,108,3,16,8,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,
0,0,0,109,110,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,112,114,3,22,11,0,
113,112,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,116,5,7,0,0,116,117,
5,35,0,0,117,118,5,8,0,0,118,119,5,6,0,0,119,121,3,48,24,0,120,122,3,14,
7,0,121,120,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,0,123,124,5,2,0,0,124,
9,1,0,0,0,125,127,3,16,8,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,
0,128,129,1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,132,5,35,0,0,132,134,
5,9,0,0,133,135,3,52,26,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,
0,136,137,5,10,0,0,137,138,5,6,0,0,138,139,3,48,24,0,139,140,5,2,0,0,140,
11,1,0,0,0,141,143,3,16,8,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,1,0,
0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,144,1,0,0,0,147,148,5,35,0,0,148,
149,5,6,0,0,149,151,3,48,24,0,150,152,3,14,7,0,151,150,1,0,0,0,151,152,1,
0,0,0,152,153,1,0,0,0,153,154,5,2,0,0,154,13,1,0,0,0,155,156,5,11,0,0,156,
157,3,48,24,0,157,15,1,0,0,0,158,159,5,12,0,0,159,161,5,35,0,0,160,162,3,
18,9,0,161,160,1,0,0,0,161,162,1,0,0,0,162,17,1,0,0,0,163,164,5,9,0,0,164,
169,3,20,10,0,165,166,5,5,0,0,166,168,3,20,10,0,167,165,1,0,0,0,168,171,
1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,172,1,0,0,0,171,169,1,0,0,0,
172,173,5,10,0,0,173,19,1,0,0,0,174,175,5,35,0,0,175,176,5,13,0,0,176,177,
3,40,20,0,177,21,1,0,0,0,178,179,5,12,0,0,179,180,5,14,0,0,180,181,3,24,
12,0,181,182,5,15,0,0,182,23,1,0,0,0,183,186,3,26,13,0,184,185,5,16,0,0,
185,187,3,26,13,0,186,184,1,0,0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,189,
1,0,0,0,189,199,1,0,0,0,190,193,3,28,14,0,191,192,5,17,0,0,192,194,3,28,
14,0,193,191,1,0,0,0,194,195,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,
199,1,0,0,0,197,199,3,26,13,0,198,183,1,0,0,0,198,190,1,0,0,0,198,197,1,
0,0,0,199,25,1,0,0,0,200,208,3,30,15,0,201,202,5,11,0,0,202,208,3,26,13,
0,203,204,5,9,0,0,204,205,3,24,12,0,205,206,5,10,0,0,206,208,1,0,0,0,207,
200,1,0,0,0,207,201,1,0,0,0,207,203,1,0,0,0,208,27,1,0,0,0,209,214,3,26,
13,0,210,211,5,16,0,0,211,213,3,26,13,0,212,210,1,0,0,0,213,216,1,0,0,0,
214,212,1,0,0,0,214,215,1,0,0,0,215,29,1,0,0,0,216,214,1,0,0,0,217,222,7,
0,0,0,218,219,5,19,0,0,219,220,3,32,16,0,220,221,5,20,0,0,221,223,1,0,0,
0,222,218,1,0,0,0,222,223,1,0,0,0,223,31,1,0,0,0,224,227,3,38,19,0,225,226,
5,16,0,0,226,228,3,38,19,0,227,225,1,0,0,0,228,229,1,0,0,0,229,227,1,0,0,
0,229,230,1,0,0,0,230,237,1,0,0,0,231,232,3,34,17,0,232,233,5,17,0,0,233,
234,3,34,17,0,234,237,1,0,0,0,235,237,3,38,19,0,236,224,1,0,0,0,236,231,
1,0,0,0,236,235,1,0,0,0,237,33,1,0,0,0,238,243,3,38,19,0,239,240,5,16,0,
0,240,242,3,38,19,0,241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,
244,1,0,0,0,244,35,1,0,0,0,245,243,1,0,0,0,246,249,7,1,0,0,247,248,5,13,
0,0,248,250,7,2,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,37,1,0,0,0,251,259,
3,36,18,0,252,253,5,11,0,0,253,259,3,38,19,0,254,255,5,9,0,0,255,256,3,32,
16,0,256,257,5,10,0,0,257,259,1,0,0,0,258,251,1,0,0,0,258,252,1,0,0,0,258,
254,1,0,0,0,259,39,1,0,0,0,260,267,5,30,0,0,261,267,5,31,0,0,262,267,5,32,
0,0,263,267,5,33,0,0,264,267,3,42,21,0,265,267,3,44,22,0,266,260,1,0,0,0,
266,261,1,0,0,0,266,262,1,0,0,0,266,263,1,0,0,0,266,264,1,0,0,0,266,265,
1,0,0,0,267,41,1,0,0,0,268,277,5,14,0,0,269,274,3,40,20,0,270,271,5,5,0,
0,271,273,3,40,20,0,272,270,1,0,0,0,273,276,1,0,0,0,274,272,1,0,0,0,274,
275,1,0,0,0,275,278,1,0,0,0,276,274,1,0,0,0,277,269,1,0,0,0,277,278,1,0,
0,0,278,279,1,0,0,0,279,280,5,15,0,0,280,43,1,0,0,0,281,293,5,19,0,0,282,
287,3,46,23,0,283,284,5,5,0,0,284,286,3,46,23,0,285,283,1,0,0,0,286,289,
1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,
290,292,5,5,0,0,291,290,1,0,0,0,291,292,1,0,0,0,292,294,1,0,0,0,293,282,
1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,296,5,20,0,0,296,45,1,0,0,0,
297,298,7,3,0,0,298,299,5,6,0,0,299,300,3,40,20,0,300,47,1,0,0,0,301,303,
3,60,30,0,302,304,3,60,30,0,303,302,1,0,0,0,304,305,1,0,0,0,305,303,1,0,
0,0,305,306,1,0,0,0,306,316,1,0,0,0,307,310,3,62,31,0,308,309,5,17,0,0,309,
311,3,62,31,0,310,308,1,0,0,0,311,312,1,0,0,0,312,310,1,0,0,0,312,313,1,
0,0,0,313,316,1,0,0,0,314,316,3,60,30,0,315,301,1,0,0,0,315,307,1,0,0,0,
315,314,1,0,0,0,316,49,1,0,0,0,317,384,5,33,0,0,318,319,5,21,0,0,319,384,
5,33,0,0,320,321,7,4,0,0,321,384,5,33,0,0,322,325,3,54,27,0,323,324,5,13,
0,0,324,326,5,35,0,0,325,323,1,0,0,0,325,326,1,0,0,0,326,384,1,0,0,0,327,
328,5,14,0,0,328,340,3,54,27,0,329,330,5,9,0,0,330,335,3,48,24,0,331,332,
5,5,0,0,332,334,3,48,24,0,333,331,1,0,0,0,334,337,1,0,0,0,335,333,1,0,0,
0,335,336,1,0,0,0,336,338,1,0,0,0,337,335,1,0,0,0,338,339,5,10,0,0,339,341,
1,0,0,0,340,329,1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,343,5,15,0,0,
343,384,1,0,0,0,344,345,5,7,0,0,345,346,3,54,27,0,346,349,5,8,0,0,347,348,
5,13,0,0,348,350,5,35,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,384,1,0,0,
0,351,354,5,24,0,0,352,355,3,54,27,0,353,355,5,25,0,0,354,352,1,0,0,0,354,
353,1,0,0,0,355,356,1,0,0,0,356,357,3,18,9,0,357,358,5,8,0,0,358,384,1,0,
0,0,359,360,5,24,0,0,360,361,3,18,9,0,361,362,5,8,0,0,362,384,1,0,0,0,363,
364,5,9,0,0,364,365,3,48,24,0,365,366,5,10,0,0,366,384,1,0,0,0,367,384,5,
25,0,0,368,369,5,26,0,0,369,374,5,35,0,0,370,371,5,17,0,0,371,373,5,35,0,
0,372,370,1,0,0,0,373,376,1,0,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,377,
1,0,0,0,376,374,1,0,0,0,377,384,5,20,0,0,378,384,5,37,0,0,379,384,5,34,0,
0,380,384,5,42,0,0,381,384,5,43,0,0,382,384,5,27,0,0,383,317,1,0,0,0,383,
318,1,0,0,0,383,320,1,0,0,0,383,322,1,0,0,0,383,327,1,0,0,0,383,344,1,0,
0,0,383,351,1,0,0,0,383,359,1,0,0,0,383,363,1,0,0,0,383,367,1,0,0,0,383,
368,1,0,0,0,383,378,1,0,0,0,383,379,1,0,0,0,383,380,1,0,0,0,383,381,1,0,
0,0,383,382,1,0,0,0,384,51,1,0,0,0,385,390,5,35,0,0,386,387,5,5,0,0,387,
389,5,35,0,0,388,386,1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,
0,0,391,53,1,0,0,0,392,390,1,0,0,0,393,394,3,56,28,0,394,395,5,4,0,0,395,
397,1,0,0,0,396,393,1,0,0,0,396,397,1,0,0,0,397,398,1,0,0,0,398,399,5,35,
0,0,399,55,1,0,0,0,400,401,7,5,0,0,401,57,1,0,0,0,402,420,5,28,0,0,403,420,
5,18,0,0,404,420,5,29,0,0,405,420,5,16,0,0,406,416,5,19,0,0,407,412,5,30,
0,0,408,410,5,5,0,0,409,411,5,30,0,0,410,409,1,0,0,0,410,411,1,0,0,0,411,
413,1,0,0,0,412,408,1,0,0,0,412,413,1,0,0,0,413,417,1,0,0,0,414,415,5,5,
0,0,415,417,5,30,0,0,416,407,1,0,0,0,416,414,1,0,0,0,417,418,1,0,0,0,418,
420,5,20,0,0,419,402,1,0,0,0,419,403,1,0,0,0,419,404,1,0,0,0,419,405,1,0,
0,0,419,406,1,0,0,0,420,59,1,0,0,0,421,423,3,50,25,0,422,424,3,58,29,0,423,
422,1,0,0,0,423,424,1,0,0,0,424,61,1,0,0,0,425,427,3,60,30,0,426,425,1,0,
0,0,427,428,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,63,1,0,0,0,49,68,
75,77,94,97,109,113,121,128,134,144,151,161,169,188,195,198,207,214,222,
229,236,243,249,258,266,274,277,287,291,293,305,312,315,325,335,340,349,
354,374,383,390,396,410,412,416,419,423,428];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SenseParser extends antlr4.Parser {

    static grammarFileName = "Sense.g4";
    static literalNames = [ null, "'namespace'", "';'", "'import'", "'::'", 
                            "','", "':'", "'<'", "'>'", "'('", "')'", "'!'", 
                            "'@'", "'='", "'['", "']'", "'&'", "'|'", "'*'", 
                            "'{'", "'}'", "'^'", "'=='", "'!='", "'<*'", 
                            "'.'", "'${'", "'~'", "'+'", "'?'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "INT", 
                             "FLOAT", "BOOLEAN", "STRING", "FUNCTION", "ID", 
                             "ID_PATH", "MACROARG", "NAMESPACE", "LINECOMMENT", 
                             "BLOCKCOMMENT", "SPACES", "SCRIPT", "REGEX" ];
    static ruleNames = [ "sense", "nsSentence", "importSentence", "scriptSentence", 
                         "primeSentence", "macroSentence", "productionSentence", 
                         "exclusion", "annotation", "assigns", "assign", 
                         "criteria", "catExpr", "catUnit", "catBranch", 
                         "cat", "wordAttrExpr", "wordAttrBranch", "wordAttr", 
                         "wordAttrUnit", "value", "array", "dict", "dictItem", 
                         "expr", "unit", "idList", "qualifiedName", "namespace", 
                         "rep", "repUnit", "branch" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SenseParser.ruleNames;
        this.literalNames = SenseParser.literalNames;
        this.symbolicNames = SenseParser.symbolicNames;
    }



	sense() {
	    let localctx = new SenseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SenseParser.RULE_sense);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.nsSentence();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 65;
	            this.importSentence();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 7)) & ~0x1f) === 0 && ((1 << (_la - 7)) & 402653217) !== 0)) {
	            this.state = 75;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 71;
	                this.scriptSentence();
	                break;

	            case 2:
	                this.state = 72;
	                this.primeSentence();
	                break;

	            case 3:
	                this.state = 73;
	                this.macroSentence();
	                break;

	            case 4:
	                this.state = 74;
	                this.productionSentence();
	                break;

	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.match(SenseParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nsSentence() {
	    let localctx = new NsSentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SenseParser.RULE_nsSentence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.match(SenseParser.T__0);
	        this.state = 83;
	        this.namespace();
	        this.state = 84;
	        this.match(SenseParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importSentence() {
	    let localctx = new ImportSentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SenseParser.RULE_importSentence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(SenseParser.T__2);

	        this.state = 87;
	        this.namespace();
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 88;
	            this.match(SenseParser.T__3);
	            this.state = 89;
	            this.match(SenseParser.ID);
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 90;
	                this.match(SenseParser.T__4);
	                this.state = 91;
	                this.match(SenseParser.ID);
	                this.state = 96;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 99;
	        this.match(SenseParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scriptSentence() {
	    let localctx = new ScriptSentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SenseParser.RULE_scriptSentence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.match(SenseParser.FUNCTION);
	        this.state = 102;
	        this.match(SenseParser.T__5);
	        this.state = 103;
	        this.match(SenseParser.SCRIPT);
	        this.state = 104;
	        this.match(SenseParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primeSentence() {
	    let localctx = new PrimeSentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SenseParser.RULE_primeSentence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 106;
	                this.annotation(); 
	            }
	            this.state = 111;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 112;
	            this.criteria();
	        }

	        this.state = 115;
	        this.match(SenseParser.T__6);
	        this.state = 116;
	        localctx.name = this.match(SenseParser.ID);
	        this.state = 117;
	        this.match(SenseParser.T__7);
	        this.state = 118;
	        this.match(SenseParser.T__5);
	        this.state = 119;
	        this.expr();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 120;
	            this.exclusion();
	        }

	        this.state = 123;
	        this.match(SenseParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	macroSentence() {
	    let localctx = new MacroSentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SenseParser.RULE_macroSentence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 125;
	            this.annotation();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 131;
	        localctx.name = this.match(SenseParser.ID);
	        this.state = 132;
	        this.match(SenseParser.T__8);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 133;
	            this.idList();
	        }

	        this.state = 136;
	        this.match(SenseParser.T__9);
	        this.state = 137;
	        this.match(SenseParser.T__5);
	        this.state = 138;
	        this.expr();
	        this.state = 139;
	        this.match(SenseParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	productionSentence() {
	    let localctx = new ProductionSentenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SenseParser.RULE_productionSentence);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 141;
	            this.annotation();
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
	        localctx.name = this.match(SenseParser.ID);
	        this.state = 148;
	        this.match(SenseParser.T__5);
	        this.state = 149;
	        this.expr();
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 150;
	            this.exclusion();
	        }

	        this.state = 153;
	        this.match(SenseParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exclusion() {
	    let localctx = new ExclusionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SenseParser.RULE_exclusion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.match(SenseParser.T__10);
	        this.state = 156;
	        this.expr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SenseParser.RULE_annotation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(SenseParser.T__11);
	        this.state = 159;
	        this.match(SenseParser.ID);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 160;
	            this.assigns();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assigns() {
	    let localctx = new AssignsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SenseParser.RULE_assigns);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(SenseParser.T__8);
	        this.state = 164;
	        this.assign();
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 165;
	            this.match(SenseParser.T__4);
	            this.state = 166;
	            this.assign();
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 172;
	        this.match(SenseParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SenseParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(SenseParser.ID);
	        this.state = 175;
	        this.match(SenseParser.T__12);
	        this.state = 176;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	criteria() {
	    let localctx = new CriteriaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SenseParser.RULE_criteria);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(SenseParser.T__11);
	        this.state = 179;
	        this.match(SenseParser.T__13);
	        this.state = 180;
	        this.catExpr();
	        this.state = 181;
	        this.match(SenseParser.T__14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catExpr() {
	    let localctx = new CatExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SenseParser.RULE_catExpr);
	    var _la = 0;
	    try {
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new CatExprAndContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 183;
	            this.catUnit();
	            this.state = 186; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 184;
	                this.match(SenseParser.T__15);
	                this.state = 185;
	                this.catUnit();
	                this.state = 188; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===16);
	            break;

	        case 2:
	            localctx = new CatExprOrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 190;
	            this.catBranch();
	            this.state = 193; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 191;
	                this.match(SenseParser.T__16);
	                this.state = 192;
	                this.catBranch();
	                this.state = 195; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===17);
	            break;

	        case 3:
	            localctx = new CatExprUnitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 197;
	            this.catUnit();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catUnit() {
	    let localctx = new CatUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SenseParser.RULE_catUnit);
	    try {
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	        case 35:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 200;
	            this.cat();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            localctx.not = this.match(SenseParser.T__10);
	            this.state = 202;
	            this.catUnit();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 203;
	            this.match(SenseParser.T__8);
	            this.state = 204;
	            this.catExpr();
	            this.state = 205;
	            this.match(SenseParser.T__9);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	catBranch() {
	    let localctx = new CatBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SenseParser.RULE_catBranch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.catUnit();
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 210;
	            this.match(SenseParser.T__15);
	            this.state = 211;
	            this.catUnit();
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cat() {
	    let localctx = new CatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SenseParser.RULE_cat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        localctx.catName = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(((((_la - 18)) & ~0x1f) === 0 && ((1 << (_la - 18)) & 917505) !== 0))) {
	            localctx.catName = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 218;
	            this.match(SenseParser.T__18);
	            this.state = 219;
	            this.wordAttrExpr();
	            this.state = 220;
	            this.match(SenseParser.T__19);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wordAttrExpr() {
	    let localctx = new WordAttrExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SenseParser.RULE_wordAttrExpr);
	    var _la = 0;
	    try {
	        this.state = 236;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new WordAttrExprAndContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 224;
	            this.wordAttrUnit();
	            this.state = 227; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 225;
	                this.match(SenseParser.T__15);
	                this.state = 226;
	                this.wordAttrUnit();
	                this.state = 229; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===16);
	            break;

	        case 2:
	            localctx = new WordAttrExprOrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 231;
	            this.wordAttrBranch();

	            this.state = 232;
	            this.match(SenseParser.T__16);
	            this.state = 233;
	            this.wordAttrBranch();
	            break;

	        case 3:
	            localctx = new WordAttrExprUnitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 235;
	            this.wordAttrUnit();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wordAttrBranch() {
	    let localctx = new WordAttrBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SenseParser.RULE_wordAttrBranch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.wordAttrUnit();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 239;
	            this.match(SenseParser.T__15);
	            this.state = 240;
	            this.wordAttrUnit();
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wordAttr() {
	    let localctx = new WordAttrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SenseParser.RULE_wordAttr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        localctx.attrName = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===37)) {
	            localctx.attrName = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 247;
	            this.match(SenseParser.T__12);
	            this.state = 248;
	            localctx.attrValue = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===37)) {
	                localctx.attrValue = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wordAttrUnit() {
	    let localctx = new WordAttrUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SenseParser.RULE_wordAttrUnit);
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 251;
	            this.wordAttr();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 252;
	            localctx.not = this.match(SenseParser.T__10);
	            this.state = 253;
	            this.wordAttrUnit();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 254;
	            this.match(SenseParser.T__8);
	            this.state = 255;
	            this.wordAttrExpr();
	            this.state = 256;
	            this.match(SenseParser.T__9);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SenseParser.RULE_value);
	    try {
	        this.state = 266;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            this.match(SenseParser.INT);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.match(SenseParser.FLOAT);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.match(SenseParser.BOOLEAN);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 263;
	            this.match(SenseParser.STRING);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 264;
	            this.array();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 265;
	            this.dict();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SenseParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(SenseParser.T__13);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 14)) & ~0x1f) === 0 && ((1 << (_la - 14)) & 983073) !== 0)) {
	            this.state = 269;
	            this.value();
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 270;
	                this.match(SenseParser.T__4);
	                this.state = 271;
	                this.value();
	                this.state = 276;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 279;
	        this.match(SenseParser.T__14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dict() {
	    let localctx = new DictContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SenseParser.RULE_dict);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(SenseParser.T__18);
	        this.state = 293;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33 || _la===35) {
	            this.state = 282;
	            this.dictItem();
	            this.state = 287;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 283;
	                    this.match(SenseParser.T__4);
	                    this.state = 284;
	                    this.dictItem(); 
	                }
	                this.state = 289;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	            }

	            this.state = 291;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 290;
	                this.match(SenseParser.T__4);
	            }

	        }

	        this.state = 295;
	        this.match(SenseParser.T__19);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dictItem() {
	    let localctx = new DictItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SenseParser.RULE_dictItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        localctx.key = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===35)) {
	            localctx.key = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 298;
	        this.match(SenseParser.T__5);
	        this.state = 299;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, SenseParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.state = 315;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExprSequenceContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 301;
	            this.repUnit();
	            this.state = 303; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 302;
	                this.repUnit();
	                this.state = 305; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 266355328) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 1591) !== 0));
	            break;

	        case 2:
	            localctx = new ExprChoiceContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 307;
	            this.branch();
	            this.state = 310; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 308;
	                this.match(SenseParser.T__16);
	                this.state = 309;
	                this.branch();
	                this.state = 312; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===17);
	            break;

	        case 3:
	            localctx = new ExprUnitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 314;
	            this.repUnit();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unit() {
	    let localctx = new UnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SenseParser.RULE_unit);
	    var _la = 0;
	    try {
	        this.state = 383;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new UnitLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 317;
	            this.match(SenseParser.STRING);
	            break;

	        case 2:
	            localctx = new UnitCharListContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 318;
	            this.match(SenseParser.T__20);
	            this.state = 319;
	            this.match(SenseParser.STRING);
	            break;

	        case 3:
	            localctx = new UnitLookaheadLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 320;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===23)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 321;
	            this.match(SenseParser.STRING);
	            break;

	        case 4:
	            localctx = new UnitReferenceContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 322;
	            this.qualifiedName();
	            this.state = 325;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 323;
	                this.match(SenseParser.T__12);
	                this.state = 324;
	                localctx.alias = this.match(SenseParser.ID);
	            }

	            break;

	        case 5:
	            localctx = new UnitMacroContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 327;
	            this.match(SenseParser.T__13);
	            this.state = 328;
	            this.qualifiedName();
	            this.state = 340;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 329;
	                this.match(SenseParser.T__8);
	                this.state = 330;
	                this.expr();
	                this.state = 335;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===5) {
	                    this.state = 331;
	                    this.match(SenseParser.T__4);
	                    this.state = 332;
	                    this.expr();
	                    this.state = 337;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 338;
	                this.match(SenseParser.T__9);
	            }

	            this.state = 342;
	            this.match(SenseParser.T__14);
	            break;

	        case 6:
	            localctx = new UnitPrimeContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 344;
	            this.match(SenseParser.T__6);
	            this.state = 345;
	            this.qualifiedName();
	            this.state = 346;
	            this.match(SenseParser.T__7);
	            this.state = 349;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 347;
	                this.match(SenseParser.T__12);
	                this.state = 348;
	                localctx.alias = this.match(SenseParser.ID);
	            }

	            break;

	        case 7:
	            localctx = new UnitPrimeAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 351;
	            this.match(SenseParser.T__23);
	            this.state = 354;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 35:
	            case 38:
	                this.state = 352;
	                this.qualifiedName();
	                break;
	            case 25:
	                this.state = 353;
	                this.match(SenseParser.T__24);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 356;
	            this.assigns();
	            this.state = 357;
	            this.match(SenseParser.T__7);
	            break;

	        case 8:
	            localctx = new UnitStatementAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 359;
	            this.match(SenseParser.T__23);
	            this.state = 360;
	            this.assigns();
	            this.state = 361;
	            this.match(SenseParser.T__7);
	            break;

	        case 9:
	            localctx = new UnitParenthesisContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 363;
	            this.match(SenseParser.T__8);
	            this.state = 364;
	            this.expr();
	            this.state = 365;
	            this.match(SenseParser.T__9);
	            break;

	        case 10:
	            localctx = new UnitAnyCharContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 367;
	            this.match(SenseParser.T__24);
	            break;

	        case 11:
	            localctx = new UnitTagsContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 368;
	            this.match(SenseParser.T__25);
	            this.state = 369;
	            this.match(SenseParser.ID);
	            this.state = 374;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===17) {
	                this.state = 370;
	                this.match(SenseParser.T__16);
	                this.state = 371;
	                this.match(SenseParser.ID);
	                this.state = 376;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 377;
	            this.match(SenseParser.T__19);
	            break;

	        case 12:
	            localctx = new UnitMacroArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 378;
	            this.match(SenseParser.MACROARG);
	            break;

	        case 13:
	            localctx = new UnitScriptFunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 379;
	            this.match(SenseParser.FUNCTION);
	            break;

	        case 14:
	            localctx = new UnitScriptContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 380;
	            this.match(SenseParser.SCRIPT);
	            break;

	        case 15:
	            localctx = new UnitRegexContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 381;
	            this.match(SenseParser.REGEX);
	            break;

	        case 16:
	            localctx = new UnitNoskipContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 382;
	            this.match(SenseParser.T__26);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	idList() {
	    let localctx = new IdListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SenseParser.RULE_idList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.match(SenseParser.ID);
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 386;
	            this.match(SenseParser.T__4);
	            this.state = 387;
	            this.match(SenseParser.ID);
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qualifiedName() {
	    let localctx = new QualifiedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SenseParser.RULE_qualifiedName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        if(la_===1) {
	            this.state = 393;
	            this.namespace();
	            this.state = 394;
	            this.match(SenseParser.T__3);

	        }
	        this.state = 398;
	        this.match(SenseParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namespace() {
	    let localctx = new NamespaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SenseParser.RULE_namespace);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===38)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rep() {
	    let localctx = new RepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SenseParser.RULE_rep);
	    var _la = 0;
	    try {
	        this.state = 419;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            localctx = new RepOneOrMoreContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 402;
	            this.match(SenseParser.T__27);
	            break;
	        case 18:
	            localctx = new RepZeroOrMoreContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 403;
	            this.match(SenseParser.T__17);
	            break;
	        case 29:
	            localctx = new RepZeroOrOneContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 404;
	            this.match(SenseParser.T__28);
	            break;
	        case 16:
	            localctx = new RepPreferContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 405;
	            this.match(SenseParser.T__15);
	            break;
	        case 19:
	            localctx = new RepRangeContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 406;
	            this.match(SenseParser.T__18);
	            this.state = 416;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 30:
	                this.state = 407;
	                localctx.minCount = this.match(SenseParser.INT);
	                this.state = 412;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===5) {
	                    this.state = 408;
	                    localctx.sep = this.match(SenseParser.T__4);
	                    this.state = 410;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===30) {
	                        this.state = 409;
	                        localctx.maxCount = this.match(SenseParser.INT);
	                    }

	                }

	                break;
	            case 5:
	                this.state = 414;
	                this.match(SenseParser.T__4);
	                this.state = 415;
	                localctx.maxCount = this.match(SenseParser.INT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 418;
	            this.match(SenseParser.T__19);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repUnit() {
	    let localctx = new RepUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SenseParser.RULE_repUnit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.unit();
	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 806158336) !== 0)) {
	            this.state = 422;
	            this.rep();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	branch() {
	    let localctx = new BranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, SenseParser.RULE_branch);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 426; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 425;
	            this.repUnit();
	            this.state = 428; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 266355328) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 1591) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SenseParser.EOF = antlr4.Token.EOF;
SenseParser.T__0 = 1;
SenseParser.T__1 = 2;
SenseParser.T__2 = 3;
SenseParser.T__3 = 4;
SenseParser.T__4 = 5;
SenseParser.T__5 = 6;
SenseParser.T__6 = 7;
SenseParser.T__7 = 8;
SenseParser.T__8 = 9;
SenseParser.T__9 = 10;
SenseParser.T__10 = 11;
SenseParser.T__11 = 12;
SenseParser.T__12 = 13;
SenseParser.T__13 = 14;
SenseParser.T__14 = 15;
SenseParser.T__15 = 16;
SenseParser.T__16 = 17;
SenseParser.T__17 = 18;
SenseParser.T__18 = 19;
SenseParser.T__19 = 20;
SenseParser.T__20 = 21;
SenseParser.T__21 = 22;
SenseParser.T__22 = 23;
SenseParser.T__23 = 24;
SenseParser.T__24 = 25;
SenseParser.T__25 = 26;
SenseParser.T__26 = 27;
SenseParser.T__27 = 28;
SenseParser.T__28 = 29;
SenseParser.INT = 30;
SenseParser.FLOAT = 31;
SenseParser.BOOLEAN = 32;
SenseParser.STRING = 33;
SenseParser.FUNCTION = 34;
SenseParser.ID = 35;
SenseParser.ID_PATH = 36;
SenseParser.MACROARG = 37;
SenseParser.NAMESPACE = 38;
SenseParser.LINECOMMENT = 39;
SenseParser.BLOCKCOMMENT = 40;
SenseParser.SPACES = 41;
SenseParser.SCRIPT = 42;
SenseParser.REGEX = 43;

SenseParser.RULE_sense = 0;
SenseParser.RULE_nsSentence = 1;
SenseParser.RULE_importSentence = 2;
SenseParser.RULE_scriptSentence = 3;
SenseParser.RULE_primeSentence = 4;
SenseParser.RULE_macroSentence = 5;
SenseParser.RULE_productionSentence = 6;
SenseParser.RULE_exclusion = 7;
SenseParser.RULE_annotation = 8;
SenseParser.RULE_assigns = 9;
SenseParser.RULE_assign = 10;
SenseParser.RULE_criteria = 11;
SenseParser.RULE_catExpr = 12;
SenseParser.RULE_catUnit = 13;
SenseParser.RULE_catBranch = 14;
SenseParser.RULE_cat = 15;
SenseParser.RULE_wordAttrExpr = 16;
SenseParser.RULE_wordAttrBranch = 17;
SenseParser.RULE_wordAttr = 18;
SenseParser.RULE_wordAttrUnit = 19;
SenseParser.RULE_value = 20;
SenseParser.RULE_array = 21;
SenseParser.RULE_dict = 22;
SenseParser.RULE_dictItem = 23;
SenseParser.RULE_expr = 24;
SenseParser.RULE_unit = 25;
SenseParser.RULE_idList = 26;
SenseParser.RULE_qualifiedName = 27;
SenseParser.RULE_namespace = 28;
SenseParser.RULE_rep = 29;
SenseParser.RULE_repUnit = 30;
SenseParser.RULE_branch = 31;

class SenseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_sense;
    }

	nsSentence() {
	    return this.getTypedRuleContext(NsSentenceContext,0);
	};

	EOF() {
	    return this.getToken(SenseParser.EOF, 0);
	};

	importSentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportSentenceContext);
	    } else {
	        return this.getTypedRuleContext(ImportSentenceContext,i);
	    }
	};

	scriptSentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScriptSentenceContext);
	    } else {
	        return this.getTypedRuleContext(ScriptSentenceContext,i);
	    }
	};

	primeSentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimeSentenceContext);
	    } else {
	        return this.getTypedRuleContext(PrimeSentenceContext,i);
	    }
	};

	macroSentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MacroSentenceContext);
	    } else {
	        return this.getTypedRuleContext(MacroSentenceContext,i);
	    }
	};

	productionSentence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProductionSentenceContext);
	    } else {
	        return this.getTypedRuleContext(ProductionSentenceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterSense(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitSense(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitSense(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NsSentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_nsSentence;
    }

	namespace() {
	    return this.getTypedRuleContext(NamespaceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterNsSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitNsSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitNsSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportSentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_importSentence;
    }

	namespace() {
	    return this.getTypedRuleContext(NamespaceContext,0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SenseParser.ID);
	    } else {
	        return this.getToken(SenseParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterImportSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitImportSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitImportSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScriptSentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_scriptSentence;
    }

	FUNCTION() {
	    return this.getToken(SenseParser.FUNCTION, 0);
	};

	SCRIPT() {
	    return this.getToken(SenseParser.SCRIPT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterScriptSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitScriptSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitScriptSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimeSentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_primeSentence;
        this.name = null;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	annotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnnotationContext);
	    } else {
	        return this.getTypedRuleContext(AnnotationContext,i);
	    }
	};

	criteria() {
	    return this.getTypedRuleContext(CriteriaContext,0);
	};

	exclusion() {
	    return this.getTypedRuleContext(ExclusionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterPrimeSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitPrimeSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitPrimeSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MacroSentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_macroSentence;
        this.name = null;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	annotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnnotationContext);
	    } else {
	        return this.getTypedRuleContext(AnnotationContext,i);
	    }
	};

	idList() {
	    return this.getTypedRuleContext(IdListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterMacroSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitMacroSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitMacroSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProductionSentenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_productionSentence;
        this.name = null;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	annotation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnnotationContext);
	    } else {
	        return this.getTypedRuleContext(AnnotationContext,i);
	    }
	};

	exclusion() {
	    return this.getTypedRuleContext(ExclusionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterProductionSentence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitProductionSentence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitProductionSentence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExclusionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_exclusion;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterExclusion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitExclusion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitExclusion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_annotation;
    }

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	assigns() {
	    return this.getTypedRuleContext(AssignsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitAnnotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitAnnotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_assigns;
    }

	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterAssigns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitAssigns(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitAssigns(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_assign;
    }

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CriteriaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_criteria;
    }

	catExpr() {
	    return this.getTypedRuleContext(CatExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterCriteria(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitCriteria(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitCriteria(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_catExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CatExprAndContext extends CatExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	catUnit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CatUnitContext);
	    } else {
	        return this.getTypedRuleContext(CatUnitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterCatExprAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitCatExprAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitCatExprAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.CatExprAndContext = CatExprAndContext;

class CatExprOrContext extends CatExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	catBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CatBranchContext);
	    } else {
	        return this.getTypedRuleContext(CatBranchContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterCatExprOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitCatExprOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitCatExprOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.CatExprOrContext = CatExprOrContext;

class CatExprUnitContext extends CatExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	catUnit() {
	    return this.getTypedRuleContext(CatUnitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterCatExprUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitCatExprUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitCatExprUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.CatExprUnitContext = CatExprUnitContext;

class CatUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_catUnit;
        this.not = null;
    }

	cat() {
	    return this.getTypedRuleContext(CatContext,0);
	};

	catUnit() {
	    return this.getTypedRuleContext(CatUnitContext,0);
	};

	catExpr() {
	    return this.getTypedRuleContext(CatExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterCatUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitCatUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitCatUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_catBranch;
    }

	catUnit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CatUnitContext);
	    } else {
	        return this.getTypedRuleContext(CatUnitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterCatBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitCatBranch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitCatBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_cat;
        this.catName = null;
    }

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	ID_PATH() {
	    return this.getToken(SenseParser.ID_PATH, 0);
	};

	MACROARG() {
	    return this.getToken(SenseParser.MACROARG, 0);
	};

	wordAttrExpr() {
	    return this.getTypedRuleContext(WordAttrExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterCat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitCat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitCat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WordAttrExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_wordAttrExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class WordAttrExprOrContext extends WordAttrExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	wordAttrBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordAttrBranchContext);
	    } else {
	        return this.getTypedRuleContext(WordAttrBranchContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterWordAttrExprOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitWordAttrExprOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitWordAttrExprOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.WordAttrExprOrContext = WordAttrExprOrContext;

class WordAttrExprAndContext extends WordAttrExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	wordAttrUnit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordAttrUnitContext);
	    } else {
	        return this.getTypedRuleContext(WordAttrUnitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterWordAttrExprAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitWordAttrExprAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitWordAttrExprAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.WordAttrExprAndContext = WordAttrExprAndContext;

class WordAttrExprUnitContext extends WordAttrExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	wordAttrUnit() {
	    return this.getTypedRuleContext(WordAttrUnitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterWordAttrExprUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitWordAttrExprUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitWordAttrExprUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.WordAttrExprUnitContext = WordAttrExprUnitContext;

class WordAttrBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_wordAttrBranch;
    }

	wordAttrUnit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WordAttrUnitContext);
	    } else {
	        return this.getTypedRuleContext(WordAttrUnitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterWordAttrBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitWordAttrBranch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitWordAttrBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WordAttrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_wordAttr;
        this.attrName = null;
        this.attrValue = null;
    }

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	MACROARG = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SenseParser.MACROARG);
	    } else {
	        return this.getToken(SenseParser.MACROARG, i);
	    }
	};


	STRING() {
	    return this.getToken(SenseParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterWordAttr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitWordAttr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitWordAttr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WordAttrUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_wordAttrUnit;
        this.not = null;
    }

	wordAttr() {
	    return this.getTypedRuleContext(WordAttrContext,0);
	};

	wordAttrUnit() {
	    return this.getTypedRuleContext(WordAttrUnitContext,0);
	};

	wordAttrExpr() {
	    return this.getTypedRuleContext(WordAttrExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterWordAttrUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitWordAttrUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitWordAttrUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_value;
    }

	INT() {
	    return this.getToken(SenseParser.INT, 0);
	};

	FLOAT() {
	    return this.getToken(SenseParser.FLOAT, 0);
	};

	BOOLEAN() {
	    return this.getToken(SenseParser.BOOLEAN, 0);
	};

	STRING() {
	    return this.getToken(SenseParser.STRING, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	dict() {
	    return this.getTypedRuleContext(DictContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_array;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DictContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_dict;
    }

	dictItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DictItemContext);
	    } else {
	        return this.getTypedRuleContext(DictItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterDict(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitDict(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitDict(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DictItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_dictItem;
        this.key = null;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	STRING() {
	    return this.getToken(SenseParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterDictItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitDictItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitDictItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprSequenceContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	repUnit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RepUnitContext);
	    } else {
	        return this.getTypedRuleContext(RepUnitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterExprSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitExprSequence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitExprSequence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.ExprSequenceContext = ExprSequenceContext;

class ExprUnitContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	repUnit() {
	    return this.getTypedRuleContext(RepUnitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterExprUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitExprUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitExprUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.ExprUnitContext = ExprUnitContext;

class ExprChoiceContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	branch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BranchContext);
	    } else {
	        return this.getTypedRuleContext(BranchContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterExprChoice(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitExprChoice(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitExprChoice(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.ExprChoiceContext = ExprChoiceContext;

class UnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_unit;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class UnitCharListContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(SenseParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitCharList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitCharList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitCharList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitCharListContext = UnitCharListContext;

class UnitParenthesisContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitParenthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitParenthesis(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitParenthesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitParenthesisContext = UnitParenthesisContext;

class UnitLiteralContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(SenseParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitLiteralContext = UnitLiteralContext;

class UnitPrimeAssignContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	assigns() {
	    return this.getTypedRuleContext(AssignsContext,0);
	};

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitPrimeAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitPrimeAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitPrimeAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitPrimeAssignContext = UnitPrimeAssignContext;

class UnitTagsContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SenseParser.ID);
	    } else {
	        return this.getToken(SenseParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitTags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitTags(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitTags(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitTagsContext = UnitTagsContext;

class UnitScriptFunctionContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FUNCTION() {
	    return this.getToken(SenseParser.FUNCTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitScriptFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitScriptFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitScriptFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitScriptFunctionContext = UnitScriptFunctionContext;

class UnitNoskipContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitNoskip(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitNoskip(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitNoskip(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitNoskipContext = UnitNoskipContext;

class UnitStatementAssignContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	assigns() {
	    return this.getTypedRuleContext(AssignsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitStatementAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitStatementAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitStatementAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitStatementAssignContext = UnitStatementAssignContext;

class UnitRegexContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	REGEX() {
	    return this.getToken(SenseParser.REGEX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitRegexContext = UnitRegexContext;

class UnitLookaheadLiteralContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(SenseParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitLookaheadLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitLookaheadLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitLookaheadLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitLookaheadLiteralContext = UnitLookaheadLiteralContext;

class UnitMacroArgContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MACROARG() {
	    return this.getToken(SenseParser.MACROARG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitMacroArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitMacroArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitMacroArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitMacroArgContext = UnitMacroArgContext;

class UnitMacroContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitMacro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitMacro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitMacro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitMacroContext = UnitMacroContext;

class UnitPrimeContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        this.alias = null;;
        super.copyFrom(ctx);
    }

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitPrime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitPrime(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitPrime(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitPrimeContext = UnitPrimeContext;

class UnitScriptContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SCRIPT() {
	    return this.getToken(SenseParser.SCRIPT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitScriptContext = UnitScriptContext;

class UnitReferenceContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        this.alias = null;;
        super.copyFrom(ctx);
    }

	qualifiedName() {
	    return this.getTypedRuleContext(QualifiedNameContext,0);
	};

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitReference(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitReference(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitReferenceContext = UnitReferenceContext;

class UnitAnyCharContext extends UnitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterUnitAnyChar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitUnitAnyChar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitUnitAnyChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.UnitAnyCharContext = UnitAnyCharContext;

class IdListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_idList;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SenseParser.ID);
	    } else {
	        return this.getToken(SenseParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterIdList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitIdList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitIdList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QualifiedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_qualifiedName;
    }

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	namespace() {
	    return this.getTypedRuleContext(NamespaceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterQualifiedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitQualifiedName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitQualifiedName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NamespaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_namespace;
    }

	ID() {
	    return this.getToken(SenseParser.ID, 0);
	};

	NAMESPACE() {
	    return this.getToken(SenseParser.NAMESPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterNamespace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitNamespace(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitNamespace(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_rep;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RepZeroOrOneContext extends RepContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterRepZeroOrOne(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitRepZeroOrOne(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitRepZeroOrOne(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.RepZeroOrOneContext = RepZeroOrOneContext;

class RepOneOrMoreContext extends RepContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterRepOneOrMore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitRepOneOrMore(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitRepOneOrMore(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.RepOneOrMoreContext = RepOneOrMoreContext;

class RepRangeContext extends RepContext {

    constructor(parser, ctx) {
        super(parser);
        this.minCount = null;;
        this.sep = null;;
        this.maxCount = null;;
        super.copyFrom(ctx);
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SenseParser.INT);
	    } else {
	        return this.getToken(SenseParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterRepRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitRepRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitRepRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.RepRangeContext = RepRangeContext;

class RepPreferContext extends RepContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterRepPrefer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitRepPrefer(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitRepPrefer(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.RepPreferContext = RepPreferContext;

class RepZeroOrMoreContext extends RepContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterRepZeroOrMore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitRepZeroOrMore(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitRepZeroOrMore(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

SenseParser.RepZeroOrMoreContext = RepZeroOrMoreContext;

class RepUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_repUnit;
    }

	unit() {
	    return this.getTypedRuleContext(UnitContext,0);
	};

	rep() {
	    return this.getTypedRuleContext(RepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterRepUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitRepUnit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitRepUnit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SenseParser.RULE_branch;
    }

	repUnit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RepUnitContext);
	    } else {
	        return this.getTypedRuleContext(RepUnitContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.enterBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SenseListener ) {
	        listener.exitBranch(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SenseVisitor ) {
	        return visitor.visitBranch(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SenseParser.SenseContext = SenseContext; 
SenseParser.NsSentenceContext = NsSentenceContext; 
SenseParser.ImportSentenceContext = ImportSentenceContext; 
SenseParser.ScriptSentenceContext = ScriptSentenceContext; 
SenseParser.PrimeSentenceContext = PrimeSentenceContext; 
SenseParser.MacroSentenceContext = MacroSentenceContext; 
SenseParser.ProductionSentenceContext = ProductionSentenceContext; 
SenseParser.ExclusionContext = ExclusionContext; 
SenseParser.AnnotationContext = AnnotationContext; 
SenseParser.AssignsContext = AssignsContext; 
SenseParser.AssignContext = AssignContext; 
SenseParser.CriteriaContext = CriteriaContext; 
SenseParser.CatExprContext = CatExprContext; 
SenseParser.CatUnitContext = CatUnitContext; 
SenseParser.CatBranchContext = CatBranchContext; 
SenseParser.CatContext = CatContext; 
SenseParser.WordAttrExprContext = WordAttrExprContext; 
SenseParser.WordAttrBranchContext = WordAttrBranchContext; 
SenseParser.WordAttrContext = WordAttrContext; 
SenseParser.WordAttrUnitContext = WordAttrUnitContext; 
SenseParser.ValueContext = ValueContext; 
SenseParser.ArrayContext = ArrayContext; 
SenseParser.DictContext = DictContext; 
SenseParser.DictItemContext = DictItemContext; 
SenseParser.ExprContext = ExprContext; 
SenseParser.UnitContext = UnitContext; 
SenseParser.IdListContext = IdListContext; 
SenseParser.QualifiedNameContext = QualifiedNameContext; 
SenseParser.NamespaceContext = NamespaceContext; 
SenseParser.RepContext = RepContext; 
SenseParser.RepUnitContext = RepUnitContext; 
SenseParser.BranchContext = BranchContext; 
