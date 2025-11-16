import React, { useState, useRef } from 'react';
import { Upload, Camera, Leaf, AlertCircle, CheckCircle, Info, Loader, X } from 'lucide-react';

export default function AgroVisionAI() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedImage);

      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message || 'Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-lg">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AgroVision AI</h1>
                <p className="text-sm text-gray-600">Plant Disease Detection System</p>
              </div>
            </div>
            <div className="bg-green-100 px-4 py-2 rounded-full">
              <span className="text-green-800 font-semibold text-sm">SDG 2: Zero Hunger</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Camera className="w-5 h-5 mr-2 text-green-600" />
                Upload Plant Image
              </h2>

              {!preview ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-3 border-dashed border-green-300 rounded-xl p-12 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all duration-200"
                >
                  <Upload className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">
                    PNG, JPG or JPEG (max 10MB)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-96 object-cover rounded-xl border-2 border-green-200"
                  />
                  <button
                    onClick={handleReset}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              {preview && !loading && !result && (
                <button
                  onClick={handleAnalyze}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-md"
                >
                  Analyze Plant Health
                </button>
              )}

              {loading && (
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center justify-center space-x-3">
                    <Loader className="w-6 h-6 text-blue-600 animate-spin" />
                    <span className="text-blue-800 font-medium">Analyzing image...</span>
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-semibold">Error</p>
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-lg p-6 text-white">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">How it works</h3>
                  <ul className="space-y-2 text-green-50 text-sm">
                    <li>• Upload a clear image of the plant leaf</li>
                    <li>• Our AI analyzes for 38+ disease types</li>
                    <li>• Get instant diagnosis and recommendations</li>
                    <li>• Take action to protect your crops</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results Section */}
          <div className="space-y-6">
            {result && (
              <>
                {/* Diagnosis Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    {result.prediction.is_healthy ? (
                      <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mr-2 text-amber-600" />
                    )}
                    Diagnosis Results
                  </h2>

                  <div
                    className={`rounded-xl p-6 mb-4 ${
                      result.prediction.is_healthy
                        ? 'bg-green-50 border-2 border-green-200'
                        : 'bg-amber-50 border-2 border-amber-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-sm font-semibold ${
                          result.prediction.is_healthy ? 'text-green-700' : 'text-amber-700'
                        }`}
                      >
                        Status
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          result.prediction.is_healthy
                            ? 'bg-green-200 text-green-800'
                            : 'bg-amber-200 text-amber-800'
                        }`}
                      >
                        {result.prediction.is_healthy ? 'HEALTHY' : 'DISEASE DETECTED'}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {result.prediction.disease}
                    </h3>

                    <p className="text-gray-700 mb-3">{result.prediction.description}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Confidence</span>
                      <span className="font-bold text-gray-900">
                        {(result.prediction.confidence * 100).toFixed(1)}%
                      </span>
                    </div>

                    <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${
                          result.prediction.is_healthy ? 'bg-green-600' : 'bg-amber-600'
                        }`}
                        style={{ width: `${result.prediction.confidence * 100}%` }}
                      />
                    </div>

                    {!result.prediction.is_healthy && (
                      <div className="mt-3 pt-3 border-t border-amber-200">
                        <span className="text-sm font-semibold text-amber-900">
                          Severity: {result.prediction.severity}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Alternative Predictions */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Alternative Possibilities
                    </h4>
                    <div className="space-y-2">
                      {result.alternative_predictions.slice(1, 3).map((pred, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                        >
                          <span className="text-sm text-gray-700">{pred.disease}</span>
                          <span className="text-sm font-semibold text-gray-600">
                            {(pred.confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommendations Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-green-100">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Recommended Actions
                  </h2>
                  <div className="space-y-3">
                    {result.recommendations.map((rec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100"
                      >
                        <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{rec}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {!result && !loading && (
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-green-100 text-center">
                <Leaf className="w-20 h-20 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No Analysis Yet
                </h3>
                <p className="text-gray-600">
                  Upload a plant image to get started with disease detection
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-1">
              AgroVision AI - Empowering farmers with AI-driven plant health insights
            </p>
            <p className="text-gray-500">
              Supporting UN Sustainable Development Goal 2: Zero Hunger
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}