class SessionsController < ApplicationController
    
    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
    end
    
end