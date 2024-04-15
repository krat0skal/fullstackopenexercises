**Below steps are to be followed for part 3 of the exercise**

first we initialize node repowith node init
install express dependency with npm install express
install nodemon dev dependency with npm install --save-dev nodemon
declare dev script in package.json
to read request.body, please use app.use(express.json())

added morgan by npm install morgan
new morgan variable declared and used by app for logging api reuests uing iny format

create new mprgan token with function which returns request ody when motheod is POST

npm install cors to allow cross origin resource sharing
use app.use(cors())