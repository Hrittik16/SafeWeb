# This python script is to parse the dataset and 
# remove all unnecessary characters

infile = open("cuss_words.json", "r")
outfile = open("cuss_words_updated.json", "w")
for line in infile:
	for word in line:
		if word is "}" or word is "{":
			outfile.write("")
		else:
			outfile.write(word)

