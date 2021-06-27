require 'dotenv'
class Api::ComicVineController < ApplicationController

  def get_comicvine
    @url = "https://comicvine.gamespot.com/api/issue/4000-14582/"
    response = RestClient.get(@url,headers:{params:{apikey: => ENV['COMICVINE_APP_KEY']}})
    render json: response
  end



end
