const express = require('express')
const router = express.Router()
const ProjectController = require('../controllers/ProjectController')
const Project = require('../models/Project')

router.get('/', (req, res) => {
    const data = req.context // {it has stored all the data in the page key and then to the global key}
    const projectCtr = new ProjectController()
    projectCtr.get()
    .then(projects =>{
        data['projects'] = projects
        //console.log('Projects: ' + JSON.stringify(projects))
        res.render('landing',data)
    })
    
    .catch(err => {
        res.send('oops its incorrect'+err.message)

    })    
})

router.get('/project/:slug', (req,res) => {
    const data = req.context 
    const projectSlug = req.params.slug

    //res.send('SLUG == ' + projectSlug)
    const projectCtr = new ProjectController()
    projectCtr.get({slug:projectSlug})
    .then(projects => {
        if (projects.length == 0){
            throw new Error('Project not found')
            return
        }

        const project = projects[0]
        data['project'] = project
        res.render('project',data)

    })
    .catch(err => {
        res.send("This is not correct"+ err.message)

    })


})

module.exports = router
