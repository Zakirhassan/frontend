import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import axios from "axios";

const Main = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/analyze", { text });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error analyzing text:", error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Was this text written by a human or AI?
      </Typography>
      <TextField
        label="Paste your text here..."
        multiline
        rows={8}
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        sx={{ mb: 3 }}
      />
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubmit}
        >
          Check Origin
        </Button>
      </Box>

      {result && (
          <div className="result-section">
            <h3>Detection Result</h3>
            <p>Version: {result.documents[0].version}</p>
            <p>Predicted Class: {result.documents[0].predicted_class}</p>
            <p>
              Confidence Score:{" "}
              {Math.round(result.documents[0].confidence_score * 100)}%
            </p>
            <p>
              Probability AI Generated:{" "}
              {Math.round(
                result.documents[0].class_probabilities.ai * 100
              )}
              %
            </p>
            <p>
              Probability Human Generated:{" "}
              {Math.round(
                result.documents[0].class_probabilities.human * 100
              )}
              %
            </p>
            <p>Overall Confidence: {result.documents[0].confidence_category}</p>

            {/* Additional stats */}
            {result.documents[0].sentences.map((sentence, index) => (
              <div key={index} className="sentence-result">
                <p>Sentence: {sentence.sentence}</p>
                <p>
                  AI Generated Probability:{" "}
                  {Math.round(sentence.generated_prob * 100)}%
                </p>
              </div>
            ))}
          </div>
        )}
    </Paper>
  );
};

export default Main;
