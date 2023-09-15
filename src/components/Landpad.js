import React from 'react'

function Landpad({landpadData}) {

  function limitToTwoSentences(text) {
    const sentences = text.split(/\. |\? |! /);
    const firstTwoSentences = sentences.slice(0, 2).join('. ');
    return firstTwoSentences;
  }

  return (
    <div>
      <p>Landpad - {landpadData.full_name.toUpperCase()}</p>
      <p>Landpad Status - {landpadData.status}</p>
      <p>Landpad Type - {landpadData.type}</p>
      <p>Landpad Details - {limitToTwoSentences(landpadData.details)}</p>
    </div>
  );
}

export default Landpad
