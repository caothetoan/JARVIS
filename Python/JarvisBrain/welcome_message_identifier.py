import nltk


def get_welcome_msg(text, chunked_data):
    p0 = ["hi", "hello", "hey", "yo"]
    p1 = ["how are", "how've", "what's up", "doing"]
    p2 = ["good to see you", "nice to see you"]
    p3 = ["your name", "who's there", "who are you", "your name", "who're you", "who's this"]
    p4 = ["i am", "i'm", "iam", "we are", "my name"]
    p5 = ["where are you from", "where do you come", "what are you going"]
    result = ""
    for w in p0:
        if w in text:
            result = "Hello!"
            break
    for w in p1:
        if w in text:
            result = " I am good."
            break
    for w in p2:
        if w in text:
            result = " me too."
            break
    for w in p3:
        if w in text:
            result = " I am Jarvis."
            break
    for w in p5:
        if w in text:
            result = " I am from Vietnam."
            break
    for w in p4:
        if w in text:

            name = ""
            for subtree in chunked_data.subtrees(filter=lambda t: t.label() in "Chunk"):
                for l in subtree.leaves():
                    name += str(l[0]) + " "
                print(name)
                # break

            if "Hello" not in result:
                result = "Hello"
            print(len(name))
            if len(name) > 2:
                result += " " + name[:-1] + "! I am Jarvis. I can do so much things than you think."
            else:
                result += " I am Jarvis, an AI system that build by Cao The Toan from VNIT.TOP"
            break

    print(result)
    return result


def get_greeting(text):
    # tokenize and remove stop words
    # tokenized = nltk.word_tokenize(text)

    # stop_words = set(stopwords.words("english"))
    # filtered_text = [w for w in tokenized if not w in stop_words]
    # print("fitered text -> ", filtered_text)

    # #  tag the filtered words
    # tags = nltk.pos_tag(tokenized)
    # print("fitered tags -> ", tags)

    tokenized = nltk.word_tokenize(text)
    tags = nltk.pos_tag(tokenized)
    chunk_pattern = r""" Chunk: {<NNP.?|NNPS.?>} """
    chunk_parser = nltk.RegexpParser(chunk_pattern)
    chunked_data = chunk_parser.parse(tags)
    print(chunked_data)

    return get_welcome_msg(text.lower(), chunked_data)

