#format assign 10 in one sentence
x="There are %d types of people." %10
#assign binary to variaty
binary="binary"
#assign "don't" to variaty
do_not="don't"
#assign one sentenct with two format value 
y="Those who know %s and those who %s" % (binary,do_not)

#displey one sentence
print x
#display another sentence
print y

#display some more word combined with x,use %r
print "I said: %r ." % x
#display some more word combined with y,use %s
print "I also said: %s." % y

#assigned True to variaty
hilarious = True
#assigned string to variaty with format value embeded
joke_evaluation="Isn't that joke so funny?! %r "

#display some more word combined with "joke...." variaty
print joke_evaluation % hilarious

#assigned string to w and e
w="This is the left side of...."
e="a string with a right side."

#display w e string in combination
print w+e