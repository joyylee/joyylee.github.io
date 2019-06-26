"""
Insta485 index (main) view.

URLs include:
/
"""
import flask
import insta485


@insta485.app.route('/', methods=['GET', 'POST'])
def show_index():
    """Start Page."""
    # redirect to login page if not logged in
    # get_following_command = "SELECT username2 from following where\
    # username1 = '{logname1}'".format(logname1=flask.session['logname'])
    # get_following = get_db().execute(get_following_command)
    # follower_str = "( "

    # for follower in get_following.fetchall():
    #     follower_str += " '{un2}' , ".format(un2=(follower['username2']))

    # follower_str += "'{logname1}')".format(logname1=flask.session['logname'])
    # execute_posts = "select * from posts where owner in "
    # execute_posts += follower_str
    # execute_posts += " order by postid desc"
    # get_following = get_db().execute(execute_posts)

    # posts = []  # array of hash for posts
    # for post in get_following.fetchall():
    #     post_hash = get_post_info(post)
    #     posts.append(post_hash)
    # context = {"logname": flask.session['logname'], "posts": posts}
    return flask.render_template("index.html")

