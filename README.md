#amygdala 

Site visit notes:
- Hang fabric from three eye hooks already existing in ceiling
- Eye hooks are sitting at a length of 124cm
- Total size of fabric ordered is 140cm x 215cm which will hand in window

Current plan:
- Switch over to 2 x RGB values with 3 touch sensors each
- Sensors will send key codes 48, 49, 50, 51, 52, 53 (equals 0 = R1, 1 = G1, 2 = B1, 3 = R2, 4 = G2, 5 = B2)
- When sensor is touched, value will increment by 1
- When sensor is touched, value of R, G or B value will pulse around the sensor
- When sensor is touched, accumulative colour of RGB1 or RGB2 will display in semi-circle
- Remove paint strokes after n minutes
-- Keep track of last 100 strokes, clear canvas and repaint every n minutes
-- Or, take screenshot every n minutes and use as background
- Random paint events, multiple at a time 
- Animate paint to appear horizontally mimicing a real paint stroke
-- Look into a fade like a paint stroke would near the end
-- Maintain the bezier curves