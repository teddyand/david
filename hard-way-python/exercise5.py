name='Zed A. Shaw'
age=35 # not a lie
height=74.0 #inches
weight=180.0 #lbs
teeth='White'
eyes='Blue'

hair='Brown'

print "Let's talk about %s." % name
print "He's %r Cm tall." % float(height*2.54)
print "He's %r Kg heavy." %float(weight/2.2046)
print "Actually that's not too heavy."
print "He's got %s eyes and %s hair." %(eyes,hair)
print "His teeth are usually %s depending on the coffee." % teeth

#this line is tricky ,try to get it exactly right 
print "If I add %r, %r, and %r I get %r." %(age,
    height,weight,age+height+weight)