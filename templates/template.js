[
{
  "step": "2",
  "content": {
    "step": "2",
    "title": "Initial Configuration",
    "body": [
      " <h3>The Script</h3> ",
      " Our 'hello world' application is a simple Python script that loops ",
      " forever, displaying the time every few seconds. <br/><br/> ",
      " The script has an intentional bug, which we will explain later on. ",
      " <h3>Aurora Configuration</h3> ",
      " Once we have our script/program, we need to create a ",
      " <i>configuration file</i> that tells Aurora how to manage and launch our Job. ",
      " <a href=\"#modal\" class=\"link-b\">More Info</a>"
    ],
    "moreinfo": [
      " <h3>Aurora Configuration</h3> ",
      " <p>To run a job on Aurora, you must specify a configuration file that tells Aurora what it needs ",
      " to know to schedule the job, what Mesos needs to run the tasks the job is made up of, ",
      " and what Thermos needs to run the processes that make up the tasks. This file must have a.aurora suffix. </p> ",
      " <p>configuration file defines a collection of objects, along with parameter values for their attributes. ",
      " An Aurora configuration file contains the following three types of objects: </p>",
      " <ul> ",
      " <li>Job</li> ",
      " <li>Task</li> ",
      " <li>Process</li> ",
      " </ul> "
    ],
    "tips": " Write the following command for see these files and open with <span class=\"editor-b\">nano editor</span> ",
    "commands": [
      {"command":"ls"}
    ],
    "laststep": false
  },
  "laststep": false
},
{
  "step": "3",
  "content": {
    "step": "3",
    "title": "Creating the Job",
    "body": [
      " We’re ready to launch our job! To do so, we use the Aurora Client to issue a  ",
      " Job creation request to the Aurora scheduler. <br/><br/> ",
      " Many Aurora Client commands take a job key argument, which uniquely identifies a Job. ",
      " A job key consists of four parts, each separated by a “/”. The four parts are ",
      " <code>&lt;cluster&gt;/&lt;role&gt;/&lt;environment&gt;/&lt;jobname&gt;</code> ",
      " in that order. When comparing two job keys, if any of the four parts is ",
      " different from its counterpart in the other key, then the two job keys identify ",
      " two separate jobs. If all four values are identical, the job keys identify the same job. <br/> ",
      " <code>/etc/aurora/clusters.json</code> within the Aurora scheduler has the available cluster names. ",
      " For Vagrant, from the top-level of your Aurora repository clone. "
    ],
    "tips": "Run these commands",
    "commands": [
      {"command":"vagrant ssh"},
      {"command":"cat /etc/aurora/clusters.json"},
      {"command":"aurora job create devcluster/www-data/devel/hello_world /vagrant/hello_world.aurora"}
    ],
    "laststep": false
  },
  "laststep": false
},
{
  "step": "4",
  "content": {
    "step": "4",
    "title": "Watching the Job Run",
    "body": [
      " Now that our job is running, let’s see what it’s doing. Access the scheduler web interface at  ",
      " http://$scheduler_hostname:$scheduler_port/scheduler Or when using vagrant, ",
      " http://192.168.33.7:8081/scheduler First we see what Jobs are scheduled: <br/> ",
      " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"b\" data-image=\"./templates/aurora_images/scjobssummary.png\">scheduled jobs summary</a> ",
      " <br/><br/> ",
      " Which in this case was www-data, and we see the Jobs associated with that role: <br/> ",
      " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"b\" data-image=\"./templates/aurora_images/wwwdata.png\">www-data</a> ",
      " <br/><br/> ",
      " If you click on your hello_world Job, you’ll see: <br/>",
      " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"b\" data-image=\"./templates/aurora_images/jobhw.png\">job:hello_world</a> ",
      " <br/><br/> ",
      " Oops, looks like our first job didn’t quite work! The task failed, so we have to figure out what went wrong. ",
      " <br/> Access the page for our Task by clicking on its host. <br/> ",
      " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"b\" data-image=\"./templates/aurora_images/failjob.png\">aurora job failed</a> ",
      " <br/><br/> ",
      " Once there, we see that the hello_world process failed. The Task page captures the standard ",
      " error and standard output streams and makes them available. Clicking through to stderr on ",
      " the failed hello_world process, we see what happened. <br/> ",
      " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"s\" data-image=\"./templates/aurora_images/stderr_hwpy.png\">log stderr</a> "
    ],
    "tips":
      [
        " It looks like we made a typo in our Python script. We wanted xrange, not xrang. ",
        " Edit the hello_world.py script to use the correct function and we will try again. ",
        " For show the result you can see in these images : <br/> ",
        " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"g\" data-image=\"./templates/aurora_images/updatejob.png\">aurora update start</a> ",
        " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"b\" data-image=\"./templates/aurora_images/log_stdout.png\">output of log</a> "
      ],
    "commands": [
      {"command":"nano hello_world.py"},
      {"command":"aurora update start devcluster/www-data/devel/hello_world /vagrant/hello_world.aurora"}
    ],
    "laststep": false
  },
  "laststep": false
},
{
  "step": "5",
  "content": {
    "step": "5",
    "title": "Cleanup",
    "body": [
      " Now that we’re done, we kill the job using the Aurora client. <br/> ",
      " The job page now shows the hello_world tasks as completed. ",
      " <a href=\"#modal\" class=\"modalimage img-b\" data-size=\"b\" data-image=\"./templates/aurora_images/killjob.png\">aurora job killall</a> "
    ],
    "tips": "Run this command",
    "commands": [
      {"command":"aurora job killall devcluster/www-data/devel/hello_world"}
    ],
    "laststep": true
  },
  "laststep": true
}
]
