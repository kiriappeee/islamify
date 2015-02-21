/**
 * The model class for the Lecture data taken from the Lecture collection
 *
 * 
 */

Model.Lecture =  function ( data, owner ) {
	Model.Abstract.call( this, owner );

	this._data = data;
	this._speaker = Speaker.findOne({ _id: this._data.speakerID });
}

Model.Lecture.prototype = new Model.Abstract();
Model.Lecture.prototype.constructor = Model.Lecture;

/** 
 * Data properties for the Lecture object
 */

 Model.Lecture.prototype.lectureID = function() {
 	return this._data._id;
 }

Model.Lecture.prototype.title = function() {
	return this._data.title;
}

Model.Lecture.prototype.speaker = function() {
	return this._speaker;
}

Model.Lecture.prototype.tags = function() {
	return this._data.tags;
}

Model.Lecture.prototype.language = function() {
	return this._data.language;
}

Model.Lecture.prototype.file = function() {
	var part = this._data.audio[0];
	return part.file + '.' + part.type;
}

/** 
 * Features of the Lecture object
 */

 Model.Lecture.prototype.isMultiPart = function() {
 	return this._data.audio.length > 1;
 }

 /** 
  * Actions of lecture object
  */

