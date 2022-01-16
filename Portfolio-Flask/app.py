from flask import Flask, render_template

#app creation
app = Flask(__name__)
app.secret_key = 'SecretKeyForSigningCookies'

#Test UI
@app.route('/', methods=['GET'])
def main():
    return render_template('layout.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5000)