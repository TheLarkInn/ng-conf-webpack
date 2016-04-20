// Simplest webpack example known to human kind.

module.exports = {
  progress: true,
	entry: './index.js',
	output:  {
		filename: 'bundle.js',
		path: 'dist/'
	}, 
  devServer: {
    contentBase: 'dist/'
  }
}
