Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera_1 = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
    });
}
console.log('ml5 version',ml5.verion);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AoWPk1gZd/model.json",modelLoaded);
function modelLoaded()
{
    console.log('Model Loaded');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function speak(){
    var synth = windoww.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
function gotResult(error, results)
{
    if(error){
        //console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        if(results[0].label == "Thumbs up")
        {
            document.getElementById("result_gesture").innerHTML = "&#128077;";
        }
        if(results[0].label == "Hi-five")
        {
            document.getElementById("result_gesture").innerHTML = "&#9995;";
        }
        if(results[0].label == "Ok")
        {
            document.getElementById("result_gesture").innerHTML = "&#128076;";
        }
    }}
function speak(){
    var synth = windoww.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1; 
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}