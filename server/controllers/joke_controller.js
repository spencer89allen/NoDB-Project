let jokes = [];
let id = 0;


module.exports = {

        get: (req, res) => {

            res.send(jokes)
        },

        create: (req, res) => {
            
            const { joke } = req.body;
            
            jokes.push(joke)

            res.send(jokes)

        },

        delete: (req, res) => {

            var {index} = req.params

            jokes.splice(index, 1)

            res.send(jokes)

        },

        edit: (req, res) => {
            const { index } = req.params;
            const { text } = req.body;

            jokes[index] = text;

            res.send(jokes[index]);
        }
    
}